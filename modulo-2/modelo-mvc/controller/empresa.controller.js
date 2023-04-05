const empresaService = require("../service/empresa.service");
const mongoose = require("mongoose");


const find = async (req, res) => {
    try{
        const id = mongoose.Types.ObjectId(req.params.id);
        let found = false;

        const empresa = await empresaService.findByIdEmpresa(id);

        if(empresa != null){
            found = true;
        }

        if(!found){
            return res.status(404).send({message: "Não encontrada! Tente outro ID."});
        }

        return res.status(200).send(empresa);

    }catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const findAllEmpresas = async (req, res) => {
    return res.status(200).send(await empresaService.findAllEmpresa());
}

const createEmpresa = async (req, res) => {
    const empresa = req.body;

    if(Object.keys(empresa).length === 0) {
        return res.status(400).send({message: "Corpo da mensagem está vazio!"});
    }
    
    if ((!empresa.nome) || (!empresa.numFuncionarios)){
        return res.status(400).send({message: "Algum campo não foi preenchido."});
    }

    
    return res.status(201).send(await empresaService.createEmpresa(empresa));
}

const updateEmpresa = async (req, res) => {
    const id = req.params.id;
    const empresa = req.body;
    // let found = false;

    if(Object.keys(empresa).length === 0) {
        return res.status(400).send({message: "Corpo da mensagem está vazio!"});
    }
    
    if ((!empresa.nome) || (!empresa.numFuncionarios)){
        return res.status(400).send({message: "Algum campo não foi preenchido."});
    }

    return res.status(201).send(await empresaService.updateEmpresa(id, empresa));

    // if(!found){
    //     res.status(404).send({message: "Não encontrado!"});
    // }
}

const deleteEmpresa = async (req, res) => {
    const id = req.params.id;
    // let found = false;

    return res.status(200).send(await empresaService.deleteEmpresa(id));

    // if(!found){
    //     res.status(404).send({message: "Não encontrado!"});
    // }  
}

module.exports = {
    find,
    findAllEmpresas,
    createEmpresa,
    updateEmpresa,
    deleteEmpresa
}