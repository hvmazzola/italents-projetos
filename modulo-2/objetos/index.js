const { conta } = require("./funcoes");

const novaConta = new conta(12345, 0001, '123.123.123-12', 100);

console.log(novaConta.saldo);

novaConta.depositar(250);

novaConta.sacar(100);

novaConta.sacar(1000)