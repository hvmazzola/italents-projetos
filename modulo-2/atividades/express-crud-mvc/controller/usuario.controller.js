const usuarios = [
    {
        id: 1,
        nick: 'mazzola',
        email: 'mazzola@email.com',
        senha: '1234567890',
        dataNascimento: '24/10/1996',
        cpf: '123.123.123-12',
        genero: 'M'
    },
    {
        id: 2,
        nick: 'henrique',
        email: 'henrique@email.com',
        senha: '0987654321',
        dataNascimento: '10/03/1997',
        cpf: '456.456.456.45',
        genero: 'M'
    },
    {
        id: 3,
        nick: 'beatriz',
        email: 'beatriz@email.com',
        senha: '1029384756',
        dataNascimento: '01/08/1995',
        cpf: '789.789.789.78',
        genero: 'F'
    }
]


const find = (req, res) => {
    try{
        const id = req.params.id;
        let found = false;

        usuarios.map(function (valor){
            if (valor.id == id){
                found = true;
                return res.send(valor);
            }
        })

        if(!found){
            return res.status(404).send({message: "Não encontrado! Tente outro ID."});
        }

    }catch(err){
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const findAllUsuarios = (req, res) => {
    try {
        res.status(200).send(usuarios);
    } catch(err) {
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const createUsuario = (req, res) => {
    try {
        const usuario = req.body;

        if(Object.keys(usuario).lenght === 0) {
            return res.status(400).send({message: "Corpo da mensagem está vazio!"});
        }
        
        if ((!usuario.id) || (!usuario.nick) || (!usuario.email) || (!usuario.senha) || (!usuario.dataNascimento) || (!usuario.genero) || (!usuario.cpf)){
            return res.status(400).send({message: "Algum campo não foi preenchido."});
        }

        
        usuarios.push(usuario);
        res.status(201).send(usuarios);

    } catch(err) {
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const updateUsuario = (req, res) => {
    try {
        const id = req.params.id;
        let found = false;
        const usuario = req.body;

        if(Object.keys(usuario).lenght === 0) {
            return res.status(400).send({message: "Corpo da mensagem está vazio!"});
        }
        
        if ((!usuario.id) || (!usuario.nick) || (!usuario.email) || (!usuario.senha) || (!usuario.dataNascimento) || (!usuario.genero) || (!usuario.cpf)){
            return res.status(400).send({message: "Algum campo não foi preenchido."});
        }

        usuarios.map(function (valor, index){
            if (valor.id == id){
                found = true;
                usuarios[index] = usuario;
                return res.send(usuarios[index]);
            }
        })

        if(!found){
            return res.status(404).send({message: "Não encontrado! Tente outro ID."});
        }

    } catch(err) {
        console.log(`Erro: ${err}`);
        return res.status(500).send("Erro no servidor. Tente novamente mais tarde.");
    }
}

const deleteUsuario = async (req, res) => {
    try{
        const id = req.params.id;
        let found = false;

        usuarios.map(function (valor, index){
            if (valor.id == id){
                found = true;
                usuarios.splice(index, 1);
                return res.send(valor);
            }
        })

        if(!found){
            return res.status(404).send({message: "Não encontrado! Tente outro ID."});
        }

    }catch(err){
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