const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  if (!ids) return [];
  return species.filter((e) => ids.includes(e.id));
}

module.exports = getSpeciesByIds;
