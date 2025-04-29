import express from 'express';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(express.json()); // Para entender o corpo da requisição no formato JSON
app.use('/api', userRoutes); // Prefixo para rotas de usuários

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`.Servidor rodando na porta ${PORT}`);
});
