const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return species.filter((identification) => ids.includes(identification.id));
}

module.exports = getSpeciesByIds;
/* o filter retorna vazio se nao receber parametro */
