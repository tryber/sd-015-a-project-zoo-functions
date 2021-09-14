const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) {
  return species.filter((specie) => ids.includes(specie.id));
}

// console.log(species);

module.exports = getSpeciesByIds;
