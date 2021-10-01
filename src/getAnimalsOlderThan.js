const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  for (let index = 0; index < species.length; index += 1) {
    if (species[index].name === animal) {
      return species[index].residents.every((element) => element.age > age);
    }
  }
}
module.exports = getAnimalsOlderThan;
