const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];

  const objects = ids.map((id) => data.species.find((animal) => animal.id === id));
  return objects;
}
module.exports = getSpeciesByIds;
