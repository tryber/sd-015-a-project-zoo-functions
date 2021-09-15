const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((elem) => elem.name === animal).residents.every((elem) => elem.age >= age);
}

module.exports = getAnimalsOlderThan;
