const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getAnimalsOlderThan = (animal, age) => species.find((element) => element.name === animal)
  .residents.every((resident) => resident.age > age);

console.log(getAnimalsOlderThan('penguins', 10));

module.exports = getAnimalsOlderThan;

/* Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

Observações técnicas

Deve retornar um valor booleano.
O que será avaliado

Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada. */
