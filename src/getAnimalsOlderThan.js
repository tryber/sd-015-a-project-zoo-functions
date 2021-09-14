const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal)
    .residents.every((specieAge) => specieAge.age >= age);
}
// console.log(getAnimalsOlderThan('lions', 10));
module.exports = getAnimalsOlderThan;
