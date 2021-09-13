const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => data.species.filter((id) =>
  id.id === ids[0] || id.id === ids[1]);

module.exports = getSpeciesByIds;
