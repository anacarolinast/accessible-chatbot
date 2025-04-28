import { Request, Response } from 'express';
import { processUserMessage } from '../services/chatbotService';

export const handleUserMessage = async (req: Request, res: Response) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Mensagem não fornecida.' });
    }

    const responseMessage = processUserMessage(message);
    
    return res.json({ response: responseMessage });
  } catch (error) {
    return res.status(500).json({ error: 'Erro ao processar a mensagem.' });
  }
};
