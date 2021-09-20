// const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// function getSpeciesByIds(ids) {
  // seu código aqui
  const getSpeciesByIds = (...ids) => species.filter((unit) => ids.includes(unit.id));
// }

module.exports = getSpeciesByIds;
