const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const objeto = data.species.find((element) => element.name === animal);
  const comparadorDeIdade = objeto.residents.every((element) => element.age > age);
  return comparadorDeIdade;
}

module.exports = getAnimalsOlderThan;
