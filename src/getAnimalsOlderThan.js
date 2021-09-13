const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((elem) => elem.name === animal).residents
  .every((x) => x.age > age);

module.exports = getAnimalsOlderThan;
