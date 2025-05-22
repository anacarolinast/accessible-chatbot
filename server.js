//server apenas para testar aplicações do  frontend sem o banco de dados
import express from 'express';
import fs from 'fs';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;
const USERS_FILE = path.join(__dirname, 'Users.json');

app.use(cors());
app.use(express.json());

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return [];
  const data = fs.readFileSync(USERS_FILE, 'utf-8');
  return JSON.parse(data);
}

function saveUser(user) {
  const users = readUsers();
  user.historico = [];
  users.push(user);
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
}

app.post('/Cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ mensagem: 'Preencha todos os campos.' });
  }

  const users = readUsers();
  const existe = users.find((u) => u.email === email);

  if (existe) {
    return res.status(400).json({ mensagem: 'Usuário já existe.' });
  }

  saveUser({ nome, email, senha });
  res.status(201).json({ mensagem: 'Usuário cadastrado com sucesso.' });
});

app.get('/Historico/:email', (req, res) => {
  const users = readUsers();
  const user = users.find(u => u.email === req.params.email);

  if (!user) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
  }

  res.json(user.historico || []);
});

app.post('/Historico/:email', (req, res) => {
  const { mensagens } = req.body; // [{ remetente, conteudo, timestamp }]
  const users = readUsers();
  const index = users.findIndex(u => u.email === req.params.email);

  if (index === -1) {
    return res.status(404).json({ mensagem: 'Usuário não encontrado.' });
  }

  const novaConversa = {
    id: Date.now().toString(),
    mensagens,
  };

  users[index].historico = users[index].historico || [];
  users[index].historico.push(novaConversa);

  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2));
  res.status(201).json({ mensagem: 'O seu histórico de conversas foi salvo :).' });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
