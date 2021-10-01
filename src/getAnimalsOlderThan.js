const data = require('../data/zoo_data');

// 2. Implemente a função getAnimalsOlderThan
// Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

// Observações técnicas
// Deve retornar um valor booleano.

// O que será avaliado
// Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada.

function getAnimalsOlderThan(animal, age) {
  const filteredSpecie = data.species.find((specie) => specie.name === animal);
  const hasMinimumAge = filteredSpecie.residents.every((resident) => resident.age >= age);
  return hasMinimumAge;
}

module.exports = getAnimalsOlderThan;
