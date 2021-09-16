const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  data.species
    .find((element) => element.name === animal)
    .residents.every((resident) => resident.age > age);
// console.log(getAnimalsOlderThan('penguins', 1));
module.exports = getAnimalsOlderThan;
