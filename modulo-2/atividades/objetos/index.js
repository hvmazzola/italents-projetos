class Usuario {
    constructor (nick, email, senha, dataNascimento, cpf, genero) {
        this.nick = nick,
        this.email = email,
        this.senha = senha,
        this.dataNascimento = dataNascimento,
        this.cpf = cpf,
        this.genero = genero
    }

    infos = function() {
        return console.log(this.nick + ' ' + this.dataNascimento);
    }

    login = function() {
        return console.log("Login realizado com sucesso.");
    }

    logoff = function() {
        return console.log("Logoff realizado com sucesso.");
    }
}

const usuario = new Usuario('mazzola', 'mazzola@email.com', '1234567890', '24/10/1996', '123.123.123-12', 'M');

console.log(usuario)
usuario.infos();
usuario.login();
usuario.logoff();