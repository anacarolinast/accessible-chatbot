import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes = Router();

// Rota para criar um usuário
userRoutes.post('/users', UserController.create);

export default userRoutes;
