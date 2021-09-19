const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // Fazer a função
  const resultado = data.species.filter((especie) => ids.includes(especie.id));
  return resultado;
}

module.exports = getSpeciesByIds;
