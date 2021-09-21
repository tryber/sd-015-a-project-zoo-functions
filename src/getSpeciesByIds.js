const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const especie = data.species.filter((animal) => ids.includes(animal.id));
  return especie;
}

module.exports = getSpeciesByIds;
