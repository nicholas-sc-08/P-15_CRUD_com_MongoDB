const mongoose = require(`mongoose`);

const schema_endereco = new mongoose.Schema({

    cep: { type: String, required: true},
    rua: { type: String, required: true},
    numero_residencial: { type: String, required: true},
    cidade: { type: String, required: true},
    estado: { type: String, required: true}

}, {timestamps: true});

const Endereco = mongoose.model(`Endereco`, schema_endereco);
module.exports = Endereco;