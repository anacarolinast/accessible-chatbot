import { Request, Response } from 'express';
import { CreateUserDTO } from '../dtos/createUserDTO'; 
import { User } from '../models/User'

let users: User[] = [];
let nextId = 1;

export class UserController {
  static create(req: Request, res: Response): void {
    const data: CreateUserDTO = req.body;

    const newUser: User = {
      id: nextId++,
      name: data.name,
      email: data.email,
      password: data.password, 
      createdAt: new Date()
    };

    users.push(newUser);

    res.status(201).json(newUser);
  }
  
  static getAll(req: Request, res: Response): void {
    res.json(users);
  }

  static getUser(req: Request, res: Response): void {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);

    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
    } else {
      res.json(user);
    }
  }

  static update(req: Request, res: Response): void { 
    const { id } = req.params;
    const { name, email, password } = req.body;
  
    const user = users.find(u => u.id === Number(id));
    if (!user) {
      res.status(404).json({ message: 'Usuário não encontrado' });
      return;
    }
  
    if (name) user.name = name;
    if (email) user.email = email;
    if (password) user.password = password;
  
    res.json(user);
  }
  

}
