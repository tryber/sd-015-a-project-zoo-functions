const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalNome = data.species.find((specie) => specie.name === animal);
  const animais = animalNome.residents;
  const resultado = animais.every((individuo) => age <= individuo.age);
  return resultado;
}

module.exports = getAnimalsOlderThan;
