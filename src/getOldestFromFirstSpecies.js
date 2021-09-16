const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employee = data.employees.find((worker) => worker.id === id);
  const specieResponsible = data.species
    .find((specie) => specie.id === employee.responsibleFor[0]).residents;
  const ageOrdering = specieResponsible.sort((first, second) => second.age - first.age)[0];
  const animalIdentification = [ageOrdering.name, ageOrdering.sex, ageOrdering.age];
  return animalIdentification;
}

module.exports = getOldestFromFirstSpecies;
