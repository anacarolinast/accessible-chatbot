import { Request, Response } from 'express';
import { processUserMessage } from '../services/chatbotService';

export const handleUserMessage = async (req: Request, res: Response) => {
  try {
    const { message, sessionId } = req.body;

    if (!message || !sessionId) {
      return res.status(400).json({ error: 'Mensagem e sessionId são obrigatórios.' });
    }

    const responseMessage = processUserMessage(message, sessionId);
    
    return res.json({ response: responseMessage });
  } catch (error) {
    console.error('Erro no handleUserMessage:', error);
    return res.status(500).json({ error: 'Erro ao processar a mensagem.' });
  }
};
