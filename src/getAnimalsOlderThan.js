const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const specie = data.species.filter((specie) => specie.name === animal);
  let animals = specie.map((animal) => animal.residents);
  animals = animals[0];
  return animals.every((animal) => animal.age > age);
}

module.exports = getAnimalsOlderThan;
