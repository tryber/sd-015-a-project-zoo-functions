const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (!ids) return ids;
  return data.species.filter((element) => ids.find((first) => element.id === first));
}

module.exports = getSpeciesByIds;
