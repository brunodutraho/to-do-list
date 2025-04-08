const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL); // Conexão simplificada
        console.log('Conexão com o MongoDB estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error.message);
        process.exit(1); // Encerra o processo em caso de erro crítico
    }
};

module.exports = { connect };