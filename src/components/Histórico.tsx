import React, { useEffect, useState } from 'react';

interface Mensagem {
  remetente: 'usuário' | 'bot';
  conteudo: string;
  timestamp: string;
}

interface Conversa {
  id: string;
  mensagens: Mensagem[];
}

interface Props {
  email: string;
}

const Historico: React.FC<Props> = ({ email }) => {
  const [historico, setHistorico] = useState<Conversa[]>([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/Historico/${email}`)
      .then(res => res.json())
      .then(data => {
        setHistorico(data);
        setCarregando(false);
      })
      .catch(error => {
        console.error("Erro ao carregar histórico:", error);
        setCarregando(false);
      });
  }, [email]);

  if (carregando) return <p>Carregando histórico...</p>;

  return (
    <section aria-label="Histórico de conversas" className="p-4">
      <h2 className="text-xl font-bold mb-4">Histórico de Conversas</h2>
      {historico.length === 0 ? (
        <p>Nenhuma conversa registrada.</p>
      ) : (
        historico.map((conversa) => (
          <article
            key={conversa.id}
            className="mb-6 border p-4 rounded-lg shadow-sm bg-white"
            aria-label={`Conversa ${conversa.id}`}
          >
            <h3 className="text-md font-semibold mb-2">Conversa {conversa.id}</h3>
            <ul className="space-y-2">
              {conversa.mensagens.map((msg, index) => (
                <li key={index} className="text-sm">
                  <span className="font-medium">{msg.remetente}:</span>{' '}
                  {msg.conteudo}{' '}
                  <time
                    dateTime={msg.timestamp}
                    className="text-gray-500 text-xs ml-2"
                  >
                    ({new Date(msg.timestamp).toLocaleString()})
                  </time>
                </li>
              ))}
            </ul>
          </article>
        ))
      )}
    </section>
  );
};

export default Historico;
