const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.filter((param) => animal.includes(param.name))
}

console.log(getAnimalsOlderThan('lions', 3))

module.exports = getAnimalsOlderThan;
