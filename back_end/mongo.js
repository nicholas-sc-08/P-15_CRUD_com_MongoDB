const mongoose = require(`mongoose`);
require(`dotenv`).config();

async function conectar_com_mongo(){

    try {
        
    await mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });

    // useNewUrlParser = ele vai fazer com que leia a url do mongo db que eu passei ali e vai quebra-la em partes, como se tivesse desestruturando ela..
    // já o useUnifiedTopology ela faz com que ativa o novo mecanismo de gerenciamento de conexões do mongo, é mais estavel e moderno

    } catch (erro) {
      
        console.error(erro);
    };
};

module.exports = conectar_com_mongo;