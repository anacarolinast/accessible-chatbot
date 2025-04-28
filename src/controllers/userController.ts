import { Request, Response } from 'express';
import { CreateUserDTO } from '../dtos/createUserDTO';
import { User } from '../models/User';

export class UserController {
  
  static async create(req: Request, res: Response): Promise<void> {
    try {
      const data: CreateUserDTO = req.body;

      const newUser = new User({
        name: data.name,
        email: data.email,
        password: data.password,
        birthDate: data.birthDate ? new Date(data.birthDate) : undefined,
        createdAt: new Date()
      });

      await newUser.save();

      res.status(201).json(newUser);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao criar usuário', error });
    }
  }

  static async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await User.find();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuários', error });
    }
  }

  static async getUser(req: Request, res: Response): Promise<void> {
    try {
      const id = req.params.id;

      const user = await User.findById(id);

      if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
      }

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar usuário', error });
    }
  }

  static async update(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { name, email, password } = req.body;

      const user = await User.findById(id);

      if (!user) {
        res.status(404).json({ message: 'Usuário não encontrado' });
        return;
      }

      if (name) user.name = name;
      if (email) user.email = email;
      if (password) user.password = password;

      await user.save();

      res.json(user);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar usuário', error });
    }
  }
}
