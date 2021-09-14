const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((objeto) => objeto.name.includes(animal)).residents.every((objeto) => objeto.age > age);
}

module.exports = getAnimalsOlderThan;
