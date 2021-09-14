const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const species = ids.map((id) => data.species.find((element) => element.id === id));
  return species;
}

module.exports = getSpeciesByIds;
