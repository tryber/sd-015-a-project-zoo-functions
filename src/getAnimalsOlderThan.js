const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data')
function getAnimalsOlderThan(animal, age) {
  const getAnimal = species.find((animals) => animals.name === animal).residents;
  return getAnimal.every((ageMin) => ageMin.age >= age);
}


module.exports = getAnimalsOlderThan;
