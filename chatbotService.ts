export function processUserMessage(message: string): string {
  // Aqui seria a lógica de IA ou resposta adaptada para acessibilidade
  if (message.toLowerCase().includes('olá')) {
    return 'Olá! Como posso ajudar você hoje?';
  }

  return 'Desculpe, ainda estou aprendendo a responder isso. 😊';
}
