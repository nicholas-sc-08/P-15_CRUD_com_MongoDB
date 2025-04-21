const express = require(`express`);
const cors = require(`cors`);
const body_parser = require(`body-parser`);
const app = express();
const porta = 3000;
const conectar_com_mongo = require(`./mongo.js`);
const Usuario = require(`./models/Usuario.js`);
const Endereco = require(`./models/Enderecos.js`);

conectar_com_mongo();
app.use(cors());
app.use(body_parser.json());

app.listen(porta, () => console.log(`Servidor HTTP rodando na porta ${porta}`));

app.get(`/`, (req, res) => res.send(`Conexão com o mongo funcionando!`));

app.get(`/usuarios`, async (req, res) => {

    try {
        
        const usuarios = await Usuario.find();
        res.status(200).json(usuarios);

    } catch (erro) {
   
        console.error(erro);
    };
});

app.get(`/usuarios/:id`, async (req, res) => {

    const { id } = req.params;

    try {
        
        const usuario = await Usuario.findById(id);
        res.status(200).json(usuario);

    } catch (erro) {
   
        console.error(erro);
    };
});

app.post(`/usuarios`, async (req, res) => {

    const usuario_novo = new Usuario(req.body);

    try {

        const usuario_cadastrado = await usuario_novo.save();
        res.status(201).json(usuario_cadastrado);
        
    } catch (erro) {
      
        console.error(erro);
    };
});

app.put(`/usuarios/:id`, async (req, res) => {

    const { id } = req.params;
    const informacoes_usuario = req.body;

    try {

        const usuario_atualizado = Usuario.findByIdAndUpdate(id, informacoes_usuario, { new: true });
        res.status(200).json(usuario_atualizado);

    } catch (erro) {
      
        console.error(erro);
    };
});

app.delete(`/usuarios/:id`, async (req, res) => {

    const { id } = req.params;

    try {
        
        await Usuario.findByIdAndDelete(id);
        res.status(200).json(`Usuário deletado.`);

    } catch (erro) {
      
        console.error(erro);
    };
});

app.get(`/enderecos`, async (req, res) => {

    try {
        
        const endereco = await Endereco.find();
        res.status(200).json(endereco);

    } catch (erro) {
      
        console.error(erro);
    };
});

app.get(`/enderecos/:id`, async (req, res) => {

    const { id } = req.params;

    try {
        
        const endereco = await Endereco.findById(id);
        res.status(200).json(endereco);

    } catch (erro) {
      
        console.error(erro);
    };
});

app.post(`/enderecos`, async (req, res) => {

    const novo_endereco = new Endereco(req.body);

    try {
        
        const endereco = await novo_endereco.save();
        res.status(201).json(endereco);

    } catch (erro) {
      
        console.error(erro);
    };
});

app.put(`/enderecos/:id`, async (req, res) => {

    const { id } = req.params;
    const endereco_atualizado = new Endereco(req.body);

    try {
        
        await endereco_atualizado.findByIdAndUpdate(id, endereco_atualizado, {new: true});
        res.status(200).json(`Endereco atualizado com sucesso!`);

    } catch (erro) {
      
        console.error(erro);
    };
});

app.delete(`/enderecos`, async (req, res) => {

    const { id } = req.params;

    try {
        
        await Endereco.findByIdAndDelete(id);
        res.status(200).json(`Endereço excluído com sucesso!`);

    } catch (erro) {
      
        console.error(erro);
    };
});