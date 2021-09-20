const { species } = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) =>
  species.find((specie) => specie.name === animal)
    .residents.every((animals) => animals.age > age);

module.exports = getAnimalsOlderThan;
