const data = require('../data/zoo_data');
const getEmployeeByName = require('./getEmployeeByName');

const { species, employees } = data;

function getAnimalLocation(whichAnimal) {
  return species.find((animal) =>
    animal.name === whichAnimal || animal.id === whichAnimal).location;
}

function fullCoverage() {
  const fullCoverage = employees.map((key) => ({
    id: key.id,
    fullName: `${key.firstName} ${key.lastName}`,
    species: key.responsibleFor,
  }));
  return fullCoverage;
}

function getEmployeesCoverage(givenParameter) {
  if (!givenParameter || Object.keys(givenParameter).length === 0) {
    // no param, fullCoverage
  } else {
    const givenKey = Object.values(givenParameter)[0];
    const thatEmployee = getEmployeeByName(givenKey);
    if (thatEmployee === undefined) throw new Error('Informações inválidas');
    console.log(fullCoverage());
    // console.log((`givenKey: ${givenKey} and employee: ${thatEmployee}`));
  }
}

module.exports = getEmployeesCoverage;
