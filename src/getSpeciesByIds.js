const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return ids.map((id) =>
    data.species.find(((specie) => id === specie.id)));
}

module.exports = getSpeciesByIds;
