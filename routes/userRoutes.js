"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const userRoutes = (0, express_1.Router)();
// Rota para criar um usuário
userRoutes.post('/users', userController_1.UserController.create);
// Rota para listar todos os usuários
userRoutes.get('/users', userController_1.UserController.getAll);
// Rota para buscar um usuário por ID
userRoutes.get('/users/:id', userController_1.UserController.getUser);
exports.default = userRoutes;
