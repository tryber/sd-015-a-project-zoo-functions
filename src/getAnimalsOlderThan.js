const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  return species.find((specie) => specie.name === animal) // aqui ele faz a procura do animal
    .residents.every((resident) => resident.age > age);
  // aqui ele traz um booleano que faz a verificação que se a idade passada no parametro é menor do que a dos
  // animais residentes.
}

module.exports = getAnimalsOlderThan;
