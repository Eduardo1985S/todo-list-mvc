import express from 'express';
import tarefaRoutes from './routes/tarefaRoutes.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use('/tarefas', tarefaRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});