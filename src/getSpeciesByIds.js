const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const [...species] = data.species;
  // const searchById = species.find((specie) => specie.id === ids);
  const searchById = species.filter((specie) => ids.find((id) => id === specie.id));
  // const searchById = species.find((specie) => ids.filter((id) => id));
  return ids === undefined ? [] : searchById;
}
module.exports = getSpeciesByIds;
