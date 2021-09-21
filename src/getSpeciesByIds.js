const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  // filter cria um array vazio, caso não exista um elemento que satisfaça[sem paremetro] ele devolve o array vazio(pois todos os outros elemetos foram rejeitados).
  return species.filter((idBusca) => ids.includes(idBusca.id));
}

module.exports = getSpeciesByIds;
