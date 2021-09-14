const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const { residents } = data.species.find((elem) => elem.name === animal);
  return residents.every((check) => check.age >= age);
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
