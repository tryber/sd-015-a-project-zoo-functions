const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalSelecionado = data.species.find((elemento) => elemento.name === animal);
  return animalSelecionado.residents.every((bixinho) => bixinho.age >= age);
}

module.exports = getAnimalsOlderThan;
