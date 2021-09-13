/* Esta função, a partir do nome de uma espécie e uma idade mínima, verifica se todos os animais daquela espécie possuem a idade mínima especificada.

Observações técnicas

Deve retornar um valor booleano.
O que será avaliado

Ao passar o nome de uma espécie e uma idade, testa se todos os animais desta espécie possuem a idade mínima especificada. */

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
    const mapEspecie = species.filter((objEspecie) => objEspecie.name === animal);
    const animais = mapEspecie.every((animais) => animais.residents.age > age);
    console.log(animais);
    return animais;
}
getAnimalsOlderThan('otters', 7);
module.exports = getAnimalsOlderThan;