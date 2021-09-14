const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids.length === 0) return [];
  const mapObject = ids.map((id) => data.species.find((animal) => animal.id === id));
  return mapObject;
}

console.log(getSpeciesByIds('533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'));

module.exports = getSpeciesByIds;
