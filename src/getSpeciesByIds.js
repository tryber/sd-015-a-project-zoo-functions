const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) => data.species.find((species) => id === species.id));
}

module.exports = getSpeciesByIds;
