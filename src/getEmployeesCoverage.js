const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

const { species, employees } = data;

function getAnimalLocation(whichAnimal) {
  return species.find((animal) =>
    animal.name === whichAnimal || animal.id === whichAnimal).location;
}

function getEmployeeID(param) {
  return employees.filter((what) =>
    what.id === param || what.firstName === param || what.lastName === param)[0].id;
}

function convertAnimalId(animalID) {
  return species.find((specie) => specie.id === animalID).name;
}

function fullCoverage() {
  return employees.map((key) => ({
    id: key.id,
    fullName: `${key.firstName} ${key.lastName}`,
    species: key.responsibleFor.map((currSpecie) => convertAnimalId(currSpecie)),
    locations: key.responsibleFor.map((thatSpecie) => getAnimalLocation(thatSpecie)),
  }));
}

function getEmployeesCoverage(givenParameter) {
  if (!givenParameter || Object.keys(givenParameter).length === 0) {
    return fullCoverage();
  }
  const givenKey = Object.values(givenParameter)[0];
  const thatEmployee = getEmployeeByName(givenKey);
  if (thatEmployee === undefined) throw new Error('Informações inválidas');
  const completeCoverage = fullCoverage();
  return completeCoverage.find((person) => person.id === getEmployeeID(givenKey));
}

module.exports = getEmployeesCoverage;
