const data = require('../data/zoo_data');

const { species, employees } = data;

function getLocations(array) {
  return array.map((id) => species.find((specie) => specie.id === id).location);
}
function getSpecies(array) {
  return array.map((id) => species.find((specie) => specie.id === id).name);
}

function getCoverage(employee) {
  const responsibleForSpecie = getSpecies(employee.responsibleFor);
  const specieLocation = getLocations(employee.responsibleFor);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: responsibleForSpecie,
    locations: specieLocation,
  };
}
function getEmployeesCoverage({ name, id } = 0) {
  if (typeof name === 'undefined' && typeof id === 'undefined') {
    return employees.map((element) => getCoverage(element));
  }
  const employee = employees.find((person) => person.firstName === name
  || person.lastName === name || person.id === id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return getCoverage(employee);
}

module.exports = getEmployeesCoverage;
