/* Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

Observações técnicas

Deve retornar um valor booleano.
O que será avaliado

Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada. */

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const mapEspecie = species.find((objEspecie) => objEspecie.name === animal);
  const testaIdade = mapEspecie.residents.every((bicho) => bicho.age > age);
  console.log(testaIdade);
  return testaIdade;
}
getAnimalsOlderThan('otters', 7);
module.exports = getAnimalsOlderThan;
