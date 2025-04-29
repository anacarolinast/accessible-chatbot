"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const bcrypt_1 = require("bcrypt");
const node_crypto_1 = require("node:crypto");
let users = [];
let nextId = 1;
class UserController {
    static create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const data = req.body;
            const newUser = {
                id: nextId++,
                name: data.name,
                email: data.email,
                password: data.password,
                createdAt: new Date()
            };
            if (newUser.password) {
                const randomSalt = (0, node_crypto_1.randomInt)(10, 16);
                const passwordHash = yield (0, bcrypt_1.hash)(newUser.password, randomSalt);
                newUser.password = passwordHash;
            }
            else {
                res.status(400).json({ message: 'Senha não fornecida pelo usuário' });
                return;
            }
            users.push(newUser);
            res.status(201).json(newUser);
        });
    }
    static getAll(req, res) {
        res.json(users);
    }
    static getUser(req, res) {
        const id = Number(req.params.id);
        const user = users.find(u => u.id === id);
        if (!user) {
            res.status(404).json({ message: 'Usuário não encontrado' });
        }
        else {
            res.json(user);
        }
    }
}
exports.UserController = UserController;
