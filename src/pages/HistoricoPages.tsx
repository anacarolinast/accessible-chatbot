import React from 'react';
import Historico from '../../components/Historico';

function HistoricoPage() {
  const usuario = JSON.parse(localStorage.getItem('usuarioLogado') || '{}');

  if (!usuario?.email) {
    return <p>Usuário não encontrado. Faça login novamente.</p>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Histórico de Conversas</h1>
      <Historico email={usuario.email} />
    </div>
  );
}

export default HistoricoPage;
