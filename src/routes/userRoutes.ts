import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes = Router();

userRoutes.post('/users', UserController.create);
userRoutes.get('/users', UserController.getAll);
userRoutes.get('/users/:id', UserController.getUser);
userRoutes.put('/users/:id', UserController.update);

export default userRoutes;