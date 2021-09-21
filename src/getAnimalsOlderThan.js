const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const every = species.every((animals, ages) => animals.residents.age >= ages);
  return every;
}

console.log(getAnimalsOlderThan('others', 7));

module.exports = getAnimalsOlderThan;
