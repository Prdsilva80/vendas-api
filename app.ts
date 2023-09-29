// src/app.ts
import express, { Application } from 'express';
import bodyParser from 'body-parser';
import vendasRouter from './src/routes/vendas';

const app: Application = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/vendas', vendasRouter); // Usar as rotas de vendas

// Inicie o servidor
app.listen(PORT, () => {
    console.log(`Servidor em execução na porta ${PORT}`);
});
