function novoCarro(modelo, ano, marca, combustivel){
    this.modelo = modelo,
    this.ano = ano,
    this.marca = marca,
    this.combustivel = combustivel
}

let carros = [];

carros [0] = new novoCarro ('Fusca', 1976, 'Volkswagem', 'gasolina');

carros [1] = new novoCarro ('Uno', 2010, 'Fiat', 'flex');

console.log(carros);