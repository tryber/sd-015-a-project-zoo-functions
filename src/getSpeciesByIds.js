const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(ids) {
  let IdObjects = ids.map(species)
  if (ids.length === 0) {
    return [];
  }
  return ids
}

module.exports = getSpeciesByIds;
