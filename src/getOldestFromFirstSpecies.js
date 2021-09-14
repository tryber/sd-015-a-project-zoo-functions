const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  /**
   * Consultei o repositório do Leonardo Felix para resolver essa parte.
   * https://github.com/tryber/sd-015-a-project-zoo-functions/blob/5bd87978a1f0cba8b6ca8a49e7f6ddde5d919d05/src/getOldestFromFirstSpecies.js
   */
  const employeeId = data.employees.find((employee) => employee.id === id);

  const specieOne = employeeId.responsibleFor[0];

  const specieSelec = data.species.find((specie) => specie.id === specieOne);

  const specieResident = specieSelec.residents;

  const oldSpecie = specieResident.sort((a, b) => b.age - a.age)[0];

  return [oldSpecie.name, oldSpecie.sex, oldSpecie.age];
}

module.exports = getOldestFromFirstSpecies;
