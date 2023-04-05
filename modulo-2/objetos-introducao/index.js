const pessoa = {
    nome: 'Henrique',
    sobrenome: 'Mazzola',
    altura: 1.69,
    idade: 25,

    envelhecer: function(anos){
        this.idade += anos;
    }
};

console.log(typeof(pessoa));
console.log(pessoa);

console.log(pessoa.nome);
console.log(pessoa.idade);

pessoa.envelhecer(3);
console.log(pessoa.idade);