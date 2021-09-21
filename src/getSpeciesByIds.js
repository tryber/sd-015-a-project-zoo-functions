const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/includes
  return species.filter((idBusca) => ids.includes(idBusca.id));
}

module.exports = getSpeciesByIds;
