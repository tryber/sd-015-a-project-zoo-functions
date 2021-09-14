const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const bicho = data.species.find((especie) => especie.name === animal);
  return bicho.residents.every((residente) => residente.age > age);
}

module.exports = getAnimalsOlderThan;
