const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species.find((x) => x.name === animal).residents.every((y) => y.age >= age);
}

module.exports = getAnimalsOlderThan;
