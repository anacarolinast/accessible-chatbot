import { Router } from 'express';
import { handleUserMessage } from '../controllers/chatbotController';

// Só modelando o código, por enquanto.

const router = Router();

// Rota para receber mensagens do usuário
router.post('/message', handleUserMessage);

export default router;
