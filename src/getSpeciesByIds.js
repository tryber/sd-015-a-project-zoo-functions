const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  return data.species.filter((object) => ids.includes(object.id));
}

module.exports = getSpeciesByIds;
