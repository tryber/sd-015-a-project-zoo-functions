const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalData = data.species.find((resident) => resident.name === animal);
  const hasMinimalAge = animalData.residents.every((residentAnimal) => residentAnimal.age >= age);
  return hasMinimalAge;
}

module.exports = getAnimalsOlderThan;
