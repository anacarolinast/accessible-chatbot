import { Router } from 'express';
import { handleUserMessage } from '../controllers/chatbotController';

const router = Router();

// Rota para receber mensagens do usuário
router.post('/message', handleUserMessage);

export default router;
