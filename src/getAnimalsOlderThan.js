const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minAge) {
  const { residents } = data.species.find((species) => species.name === animal);
  return residents.every((resident) => residents.age >= minAge);
}

module.exports = getAnimalsOlderThan;
