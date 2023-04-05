class Pessoa {
    constructor (nome, idade, altura, genero) {
        this.nome = nome,
        this.idade = idade,
        this.altura = altura,
        this.genero = genero
    }

    infos = function() {
        return console.log(this.nome + ' ' + this.idade);
    }
}

class Professor extends Pessoa {
    constructor (nome, idade, altura, genero, salario, turmas) {
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.salario = salario,
        this.turmas = turmas
    }

    infos = function() {
        return console.log(this.nome + ' ' + this.turmas + ' ' + this.salario);
    }
}

class Aluno extends Pessoa {
    constructor (nome, idade, altura, genero, nota, turma, rm) {
        super(
            nome,
            idade,
            altura,
            genero
        );
        this.nota = nota,
        this.turma = turma,
        this.rm = rm
    }

    infos = function() {
        return console.log(this.nome + ' ' + this.idade + ' ' + this.rm);
    }
}

const prof = new Professor('Henrique', 26, 1.69, 'M', 25000, [12, 14, 16]);
const estudante = new Aluno('Mazzola', 17, 1.75, 'M', 9.25, 14, 42564);

console.log(prof);
console.log(estudante);

console.log(prof.infos());
console.log(estudante.infos());