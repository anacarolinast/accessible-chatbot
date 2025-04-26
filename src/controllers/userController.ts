import { Request, Response } from 'express';
import { CreateUserDTO } from '../dtos/createUserDTO'; 
import { User } from '../models/user'; 

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

}
