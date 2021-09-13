const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');



function getSpeciesByIds(...ids) {
  // seu código aqui
 const speciesFound = species.filter(({ id }) => ids.includes(id));
 return speciesFound;
}
module.exports = getSpeciesByIds;


