const json = '{"nome": "Mazzola", "idade": 26, "professor": false, "turmas": [12, 15, 90]}';
const obj = JSON.parse(json);

console.log(obj);

const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Mazzola',
    altura: 1.69,
    idade: 25,
    professor: false,

    envelhecer: function(){
        this.idade += 1;
    }
};

const jsonPessoa = JSON.stringify(pessoa);

console.log(jsonPessoa);