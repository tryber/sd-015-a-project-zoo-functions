const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filtrarAnimais = data.species.find((animalFiltrado) => animalFiltrado.name === animal).residents;
  return filtrarAnimais.every((animalFiltrado) => animalFiltrado.age >= age);
}
module.exports = getAnimalsOlderThan;
