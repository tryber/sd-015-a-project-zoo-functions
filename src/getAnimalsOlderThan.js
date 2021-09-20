const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const { species } = data;
  const filterAnimal = species.find((element) => element.name === animal);
  const filterAge = filterAnimal.residents.every((resident) => resident.age >= age);
  return filterAge;
}

module.exports = getAnimalsOlderThan;
