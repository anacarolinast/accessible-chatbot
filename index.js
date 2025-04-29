"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use(express_1.default.json()); // Para entender o corpo da requisição no formato JSON
app.use('/api', userRoutes_1.default); // Prefixo para rotas de usuários
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`.Servidor rodando na porta ${PORT}`);
});
