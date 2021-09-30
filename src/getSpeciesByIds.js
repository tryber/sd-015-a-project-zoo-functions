const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) { // formatos diferentes de ids
  return species.filter((specie) => ids.includes(specie.id));
}

// console.log(getSpeciesByIds());

module.exports = getSpeciesByIds;
