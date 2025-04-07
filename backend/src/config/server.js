const port = process.env.PORT || 4000; 

const express = require('express');
const server = express();
const allowCors = require('./cors');

server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(allowCors);

const serverInstance = server.listen(port, '0.0.0.0', () => {
    console.log(`BACKEND is running on port ${port}.`);
});

// Aumentar os timeouts
serverInstance.keepAliveTimeout = 120000; // 120 segundos
serverInstance.headersTimeout = 120000; // 120 segundos

module.exports = server;