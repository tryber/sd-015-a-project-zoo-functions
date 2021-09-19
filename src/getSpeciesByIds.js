const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  if (!ids) return [];
  return species.filter((e) => (ids.includes(e.id)));
};

module.exports = getSpeciesByIds;
