import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes = Router();

// Rota para criar um usuário
userRoutes.post('/users', UserController.create);

// Rota para listar todos os usuários
userRoutes.get('/users', UserController.getAll);

// Rota para buscar um usuário por ID
userRoutes.get('/users/:id', UserController.getUser);

export default userRoutes;