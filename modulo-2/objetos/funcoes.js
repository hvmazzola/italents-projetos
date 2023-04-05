function conta(numero, agencia, cpf, saldo) {
    this.numero = numero,
    this.agencia = agencia,
    this.cpf = cpf,
    this.saldo = saldo,

    this.depositar = function(valor) {
        this.saldo += valor;
        return console.log(`Saldo atual: R$ ${this.saldo}`);
    },

    this.sacar = function(valor) {
        if(this.saldo < valor) {
            return console.log(`R$ ${valor} é maior que o saldo disponível.`)
        }else{
            this.saldo -= valor;
            return console.log(`Saldo atual: R$ ${this.saldo}`);
        }
    }
}

module.exports = {
    conta
}