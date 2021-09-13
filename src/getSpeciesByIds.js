const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) =>
  ids.reduce((acc, curId) => [...acc, data.species.find(({ id }) => id === curId)], []);

module.exports = getSpeciesByIds;
