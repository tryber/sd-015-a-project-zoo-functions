const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animalFind = data.species.find((resident) => resident.name === animal);
  console.log(animalFind);
  const animals = animalFind.residents.every((resident) => resident.age > age);
  return animals;
}

module.exports = getAnimalsOlderThan;
