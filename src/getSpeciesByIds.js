const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = [];

  if (ids.length === 0) return species;

  // Consultei o repositório do João Felipe Pelliccione para resolver essa parte: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/42/files
  ids.forEach((id) => species.push(data.species.find((animal) => animal.id === id)));

  return species;
}

module.exports = getSpeciesByIds;
