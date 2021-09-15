const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // return ids.reduce((acc, curr) => acc.concat(species.find((element) => element.id === curr)), []);
  if (ids.length === 0) return [];

  const specie = data.species.filter((f) => ids.includes(f.id));
  return specie;
}

module.exports = getSpeciesByIds;
