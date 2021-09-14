const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const resultado = species.filter((elemento) => ids.includes(elemento.id));
  return resultado;
}

module.exports = getSpeciesByIds;
