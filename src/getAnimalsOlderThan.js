const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Função que verifica se a idade de todos os animais da especie do parametro "animal" é maior que o valor de "age"
function getAnimalsOlderThan(animal, age) {
  // Encontra a especie no array de especies:
  const newTarget = species.find((target) => target.name === animal);
  // Verifica se todos os elemntos possuem a idade maior que o valor de "age"
  const animalAgeCheck = newTarget.residents.every((animalAge) => animalAge.age >= age);
  return animalAgeCheck;
}

module.exports = getAnimalsOlderThan;
