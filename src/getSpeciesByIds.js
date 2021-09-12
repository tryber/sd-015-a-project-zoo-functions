const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (!ids) return [];
  return species.filter((e) => ids.includes(e.id));
}

module.exports = getSpeciesByIds;
