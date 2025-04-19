const mongoose = require(`mongoose`);

const usuario_schema = new mongoose.Schema({

    nome: {

        type: String,
        required: true
    },

    email: {

        type: String,
        required: true,
        unique: true
    },

    senha: {

        type: String,
        required: true
    }
}, {

    timestamps: true
});

const Usuario = mongoose.model(`Usuario`, usuario_schema);
module.exports = Usuario;