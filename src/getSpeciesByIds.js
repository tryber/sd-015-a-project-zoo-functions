const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const speciesId = species.filter((element) => ids.includes(element.id));
  return speciesId;
}
module.exports = getSpeciesByIds;
