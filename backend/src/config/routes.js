const express = require('express');
const Todo = require('../api/todo/todo');

module.exports = (server) => {
    const router = express.Router();
    server.use('/api', router);

    // Rotas para o modelo Todo
    router.get('/todos', async (req, res) => {
        try {
            const todos = await Todo.find();
            res.json(todos);
        } catch (err) {
            res.status(500).json({ error: 'Erro ao buscar tarefas', details: err.message });
        }
    });

    router.post('/todos', async (req, res) => {
        try {
            const todo = new Todo(req.body);
            await todo.save();
            res.status(201).json(todo);
        } catch (err) {
            res.status(400).json({ error: 'Erro ao criar tarefa', details: err.message });
        }
    });

    router.put('/todos/:id', async (req, res) => {
        try {
            const todo = await Todo.findByIdAndUpdate(req.params.id, req.body, {
                new: true,
                runValidators: true,
            });
            if (!todo) return res.status(404).json({ error: 'Tarefa não encontrada' });
            res.json(todo);
        } catch (err) {
            res.status(400).json({ error: 'Erro ao atualizar tarefa', details: err.message });
        }
    });

    router.delete('/todos/:id', async (req, res) => {
        try {
            const todo = await Todo.findByIdAndDelete(req.params.id);
            if (!todo) return res.status(404).json({ error: 'Tarefa não encontrada' });
            res.status(204).send();
        } catch (err) {
            res.status(500).json({ error: 'Erro ao excluir tarefa', details: err.message });
        }
    });
};