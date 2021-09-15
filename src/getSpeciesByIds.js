const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  species.filter((element) => ids.includes(element.id));

module.exports = getSpeciesByIds;
