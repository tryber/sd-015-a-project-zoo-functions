const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const [...species] = data.species;
  const animals = species.find((specie) => specie.name === animal);
  const [...residents] = animals.residents;
  const allIsOlderThan = residents.every((resident) => resident.age >= age);
  return allIsOlderThan;
}

console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
