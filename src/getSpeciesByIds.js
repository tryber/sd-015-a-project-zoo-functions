const { species } = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => species.filter((specie) => ids.includes(specie.id));

module.exports = getSpeciesByIds;
