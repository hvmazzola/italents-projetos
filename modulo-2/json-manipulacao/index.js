const jsonEntrada = '{"nome": "Henrique", "idade": 26, "professor": false, "turmas": [12, 15, 90], "endereco": {"rua":"Rua Heitor Nunes", "numero": 57, "bairro":"Ponte do Imaruim", "cep": "88.130-727"}}';

const obj = JSON.parse(jsonEntrada);

console.log(obj);
console.log(obj.nome);
console.log(obj.endereco);
console.log(obj.endereco.cep);

obj.turmas.map(function(valor, posicao) {
    console.log(`Posição: ${posicao}, Valor: ${valor}`)
});

obj.nome += " Mazzola";
console.log(obj.nome);

obj.salario = 5000;
console.log(obj.salario);

jsonString = JSON.stringify(obj);
console.log(jsonString);