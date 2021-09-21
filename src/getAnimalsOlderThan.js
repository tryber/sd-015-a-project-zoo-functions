const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// Function to find the specie by the name and return true if all the animals of the specie are older than the age assigned as parameter
function getAnimalsOlderThan(animal, age) {
  return species.find((specie) => animal === specie.name).residents.every((info) => info.age > age);
}

module.exports = getAnimalsOlderThan;
