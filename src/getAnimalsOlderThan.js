const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// realizaei a requisição data do array species[] encontrado no doc data_zoo.js

function getAnimalsOlderThan(animal, age) {
  const animalDesejado = species.find((object) => object.name === animal);
  // usei o find() para encontrar o objeto do animal que foi passado no parâmetro através do "name"
  return animalDesejado.residents.every((element) => element.age >= age);
  // usei o every() para me retornar um valor booleano testando se todos os residents do array criado a cima tem idade superior a idade passada como valor do parâmetro.
}

module.exports = getAnimalsOlderThan;
