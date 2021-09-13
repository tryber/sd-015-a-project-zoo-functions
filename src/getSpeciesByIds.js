const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const species = [];

  if (ids.length === 0) return species;

  // Consultei o repositório do João Felipe Pelliccione para resolver essa parte: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/42/files
  ids.forEach((id) => species.push(data.species.find((animal) => animal.id === id)));

  return species;
}
console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '01422318-ca2d-46b8-b66c-3e9e188244ed'));
// console.log(getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce'));
console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
