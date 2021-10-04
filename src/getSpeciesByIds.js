const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  const resultado = ids.map((id) => species.find((specie) => specie.id === id));
  return resultado;
}

module.exports = getSpeciesByIds;
