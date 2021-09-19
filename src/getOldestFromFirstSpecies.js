const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const objEmployeeId = data.employees.find((obj) => obj.id === id);
  const objSpeciesId = objEmployeeId.responsibleFor[0];
  const objSpecie = data.species.find((obj) => obj.id === objSpeciesId);
  const ages = objSpecie.residents.map((obj) => obj.age);
  const age = ages.sort((a, b) => b - a)[0];
  const objAge = objSpecie.residents.find((obj) => obj.age === age);
  const result = Object.values(objAge);

  return result;
}

module.exports = getOldestFromFirstSpecies;
