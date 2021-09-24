const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByIds(...ids) { // diferentes formatos de ids
  return species.filter((specie) => ids.includes(specie.id)); // ferifica especie que tem o determinado id
}

// console.log(species);

module.exports = getSpeciesByIds;
