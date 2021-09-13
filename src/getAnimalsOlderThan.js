const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalEscolhido = species.filter((elemento) => elemento.name.includes(animal));
  if (animalEscolhido[0].residents.every((elemento) => elemento.age > age)) {
    return true;
  }
  return false;
}

module.exports = getAnimalsOlderThan;
