const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const idade = species
    .filter((specie) => specie.name === animal)
    .map((specie) => specie.age === age)
    .every((specie) => specie.age > 7);

  return idade;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
