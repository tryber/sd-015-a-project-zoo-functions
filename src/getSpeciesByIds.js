const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((idPesquisa) => data.species.find((species) => species.id.includes(idPesquisa)));
}

module.exports = getSpeciesByIds;
