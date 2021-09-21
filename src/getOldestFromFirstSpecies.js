const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specie = data.employees.find((a) => a.id === id).responsibleFor[0];
  const residentes = data.species.find((a) => a.id === specie).residents;
  const maisVelho = residentes.sort((a, b) => b.age - a.age)[0];
  return [maisVelho.name, maisVelho.sex, maisVelho.age];
}
// Retirei a ideia de utilizar o método sort do repositório de Leonardo https://github.com/tryber/sd-015-a-project-zoo-functions/pull/1/commits/5bd87978a1f0cba8b6ca8a49e7f6ddde5d919d05
module.exports = getOldestFromFirstSpecies;
