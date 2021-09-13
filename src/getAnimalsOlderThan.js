const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const nomeAnimal = species.filter((item) => item.name === animal);
  const residentes = nomeAnimal.map((item2) => item2.residents);
  return residentes.pop().every((item3) => item3.age > age);
}

module.exports = getAnimalsOlderThan;
