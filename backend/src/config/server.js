const express = require('express');
const helmet = require('helmet'); // Adicionado para segurança
const morgan = require('morgan'); // Adicionado para logs HTTP
const allowCors = require('./cors');

const createServer = () => {
    const server = express();

    // Middlewares
    server.use(helmet());
    server.use(morgan('dev'));
    server.use(express.urlencoded({ extended: true }));
    server.use(express.json());
    server.use(allowCors);

    return server;
};

module.exports = createServer;