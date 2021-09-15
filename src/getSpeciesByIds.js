const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) return [];
  return ids.map((id) => species.find((specie) => specie.id === id));
};

module.exports = getSpeciesByIds;
