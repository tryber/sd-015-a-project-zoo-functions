const data = require('../data/zoo_data');

// console.log(data);

function getSpeciesByIds(...ids) {
  return data.species.filter((specie) => ids.includes(specie.id));
}

module.exports = getSpeciesByIds;
