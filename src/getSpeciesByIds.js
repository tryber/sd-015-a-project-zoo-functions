const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  return (ids.length === 0) ? [] : ids.map((id) =>
    data.species.find((specie) => specie.id === id));
}

module.exports = getSpeciesByIds;
