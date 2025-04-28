import { Router } from 'express';
import { UserController } from '../controllers/userController';

const userRoutes = Router();

userRoutes.post('/users', UserController.create);

export default userRoutes;