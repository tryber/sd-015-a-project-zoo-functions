const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animais = data.species.find((specie) => specie.name === animal).residents;
  const resultado = animais.every((individuo) => age <= individuo.age);
  return resultado;
}

module.exports = getAnimalsOlderThan;
