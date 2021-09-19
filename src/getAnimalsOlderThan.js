const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filtrar = data.species.find((animalFiltrado) => animalFiltrado.name === animal).residents;
  return filtrar.every((animalFiltrado) => animalFiltrado.age >= age);
}
module.exports = getAnimalsOlderThan;
