const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length < 1) return [];
  return data.species.filter((specie) => ids.includes(specie.id));
}
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
