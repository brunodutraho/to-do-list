require('dotenv').config();
const createServer = require('./config/server');
const database = require('./config/database');
const routes = require('./config/routes');

try {
    database.connect(); // Conexão com o banco de dados

    const server = createServer(); // Cria o servidor
    routes(server); // Configuração das rotas

    const port = process.env.PORT || 4000;
    const serverInstance = server.listen(port, '0.0.0.0', () => {
        console.log(`BACKEND is running on port ${port}.`);
    });

    // Aumentar os timeouts
    serverInstance.keepAliveTimeout = 120000; // 120 segundos
    serverInstance.headersTimeout = 120000; // 120 segundos
} catch (error) {
    console.error('Erro ao carregar a aplicação:', error.message);
    process.exit(1); // Encerra o processo em caso de erro crítico
}