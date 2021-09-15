const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const ageAnimal = data.species.find((species) => species.name === animal);
  return ageAnimal.residents.every((residAge) => residAge.age > age);
}

module.exports = getAnimalsOlderThan;
