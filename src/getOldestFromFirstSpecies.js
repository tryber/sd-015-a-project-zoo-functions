const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = data.employees.find((employee) => employee.id === id).responsibleFor[0];
  const relSpecie = data.species.find((specie) => specieId === specie.id).residents
    .reduce((velho, resident) => {
      if (velho.age < resident.age) {
        return resident;
      }
      return velho;
    });
  return Object.values(relSpecie);
}

module.exports = getOldestFromFirstSpecies;
