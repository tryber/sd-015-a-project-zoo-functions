const data = require('../data/zoo_data');

const { species } = data;
function getSpeciesByIds(...ids) {
  // seu código aqui
  return ids.map((id) => species.find((specie) => specie.id === id));
}
module.exports = getSpeciesByIds;
