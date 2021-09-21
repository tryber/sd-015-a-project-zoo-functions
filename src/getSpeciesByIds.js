const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((identification) => ids.includes(identification.id));
}

module.exports = getSpeciesByIds;

/* o filter retorna vazio se nao receber nenhum parametro, engraçado que usei para relembrar o conteudo
 da trybe que achei numa busca do google, https://blog.betrybe.com/javascript/javascript-filter/
aaa os 3 pontos tbm conhecidos como spread operator que usei antes do ids serve caso eu do futuro
 se esqueça para conseguir passar diversos parametros na mesma funçao, e nao ficar um parametrozao só */
