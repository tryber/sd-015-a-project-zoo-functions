const data = require('../data/zoo_data');

// const { species } = data;
function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => data.species.find((specie) => specie.id === id));
}
module.exports = getSpeciesByIds;
