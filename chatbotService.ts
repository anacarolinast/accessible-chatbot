const responses = {
  greeting: ['olá', 'oi', 'bom dia', 'boa tarde', 'boa noite'],
  help: ['ajuda', 'socorro', 'informação'],
  goodbye: ['tchau', 'até logo', 'até mais'],
};

export function processUserMessage(message: string): string {
  const msg = message.toLowerCase();

  if (responses.greeting.some(word => msg.includes(word))) {
    return 'Olá! 👋 Como posso ajudar você?';
  }
  if (responses.help.some(word => msg.includes(word))) {
    return 'Claro! Estou aqui para ajudar. Me diga sua dúvida!';
  }
  if (responses.goodbye.some(word => msg.includes(word))) {
    return 'Tchau! 👋 Até a próxima!';
  }

  return 'Desculpe, ainda estou aprendendo a responder isso. 😊';
}
