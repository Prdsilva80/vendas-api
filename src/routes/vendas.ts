// src/routes/vendas.ts
import express, { Router, Request, Response } from 'express';
import sqlite3 from 'sqlite3';

const router: Router = express.Router();
const db = new sqlite3.Database('./src/database/database.db');

// Endpoint para adicionar uma venda
router.post('/', (req: Request, res: Response) => {
    const { vendedor, carro, quantidade, data } = req.body;

    // Inserir a venda no banco de dados
    const query = `INSERT INTO vendas (vendedor, carro, quantidade, data) VALUES (?, ?, ?, ?)`;
    db.run(query, [vendedor, carro, quantidade, data], (err) => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao adicionar a venda' });
        } else {
            res.status(201).json({ message: 'Venda adicionada com sucesso' });
        }
    });
});

export default router;
