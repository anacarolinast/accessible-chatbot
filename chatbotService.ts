// Controle de sessões simples em memória
const sessions: Record<string, { lastMessage: string }> = {};

const responses = {
  greeting: ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite'],
  help: ['ajuda', 'socorro', 'informação'],
  goodbye: ['tchau', 'até logo', 'até mais'],
};

// Agora a função recebe também o sessionId
export function processUserMessage(message: string, sessionId: string): string {
  if (!sessionId) {
    return 'Sessão inválida. Por favor, forneça um ID de sessão.';
  }

  const msg = message.toLowerCase();

  // Inicializa a sessão se ainda não existir
  if (!sessions[sessionId]) {
    sessions[sessionId] = { lastMessage: '' };
  }

  // Atualiza o último texto enviado nessa sessão
  sessions[sessionId].lastMessage = message;

  // Lógica de resposta
  if (responses.greeting.some(word => msg.includes(word))) {
    return 'Olá! 👋 Como posso ajudar você?';
  }
  if (responses.help.some(word => msg.includes(word))) {
    return 'Claro! Estou aqui para ajudar. Me diga sua dúvida!';
  }
  if (responses.goodbye.some(word => msg.includes(word))) {
    return 'Tchau! 👋 Até a próxima!';
  }
  if (msg.includes('histórico')) {
    return `Você me disse antes: "${sessions[sessionId].lastMessage}"`;
  }

  return 'Desculpe, ainda estou aprendendo a responder isso. 😊';
}
