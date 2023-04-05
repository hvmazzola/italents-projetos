const usuarioService = require("../service/usuario.service");
const mongoose = require("mongoose");


const find = async (req, res) => {
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        let found = false;

        const usuario = await usuarioService.findByIdUsuario(id);

        if(usuario != null){
            found = true;
        }

        if(!found){
            return res.status(404).send({message: "Usuário não encontrado! Tente outro ID."});
        }

        return res.status(200).send(usuario);

    }catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const findAllUsuarios = async (req, res) => {
    try {
        return res.status(200).send(await usuarioService.findAllUsuario());

    }catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const createUsuario = async (req, res) => {
    try{
        const usuario = req.body;

        if(Object.keys(usuario).length === 0) {
            return res.status(400).send({message: "Corpo da mensagem está vazio!"});
        }
        
        if ((!usuario.nick) || (!usuario.email) || (!usuario.senha) || (!usuario.dataNascimento) || (!usuario.cpf)){
            return res.status(400).send({message: "Algum campo não foi preenchido."});
        }
        
        return res.status(201).send(await usuarioService.createUsuario(usuario));

    } catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const updateUsuario = async (req, res) => {
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        const usuario = req.body;
        let found = false;
        const usuarioProcurado = await usuarioService.findByIdUsuario(id);

        if(Object.keys(usuario).length === 0) {
            return res.status(400).send({message: "Corpo da mensagem está vazio!"});
        }
        
        if ((!usuario.id) || (!usuario.nick) || (!usuario.email) || (!usuario.senha) || (!usuario.dataNascimento) || (!usuario.cpf)){
            return res.status(400).send({message: "Algum campo não foi preenchido."});
        }

        if(usuarioProcurado != null){
            found = true;
        }

        if(!found){
            return res.status(404).send({message: "Usuário não encontrado! Tente outro ID."});
        }

        return res.status(201).send(await usuarioService.updateUsuario(id, usuario));

    } catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const deleteUsuario = async (req, res) => {
    try{
        const id = new mongoose.Types.ObjectId(req.params.id);
        let found = false;
        const usuario = await usuarioService.findByIdUsuario(id);

        if(usuario != null){
            found = true;
        }

        if(!found){
            return res.status(404).send({message: "Usuário não encontrado! Tente outro ID."});
        }

        return res.status(200).send(await usuarioService.deleteUsuario(id));

    } catch(err) {
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

module.exports = {
    find,
    findAllUsuarios,
    createUsuario,
    updateUsuario,
    deleteUsuario
}