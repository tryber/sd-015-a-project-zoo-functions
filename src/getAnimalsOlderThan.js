const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((element) => element.name === animal)
  .residents.every((a) => a.age > age);

module.exports = getAnimalsOlderThan;
