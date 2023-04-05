const mongoose = require("mongoose");

const usuarioSchema = new mongoose.Schema({
    nick: {type: String, unique: true, required: true},
    email: {type: String, unique: true, required: true},
    senha: {type: String, unique: true, required: true},
    dataNascimento: {type: String, required: true},
    cpf: {type: String, unique: true, required: true},
    genero: {type: String}
});

const Usuario = mongoose.model("usuario", usuarioSchema);

module.exports = Usuario;