const data = require('../data/zoo_data');

const { species } = data;

function getAnimalsOlderThan(animal, age) {
  const animalsResidents = species.find((findAnimal) => findAnimal.name === animal).residents;// armazena os residentes
  return animalsResidents.every((resident) => resident.age >= age);
}

module.exports = getAnimalsOlderThan;
