const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const vars = species.find((objeto) => objeto.name === animal);
  return vars.residents.every((checar) => checar.age >= age);
}

module.exports = getAnimalsOlderThan;
