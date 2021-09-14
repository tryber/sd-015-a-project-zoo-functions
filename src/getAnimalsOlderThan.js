const { species } = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return species.find((iten) => iten.name === animal).residents.every((iten) => iten.age >= age);
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
