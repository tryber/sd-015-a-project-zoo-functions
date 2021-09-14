const data = require('../data/zoo_data');

const { species, employees } = data;

function getLocation(array) {
  return array.map((id) => species.find((specie) => specie.id === id).location);
}

function getSpecies(array) {
  return array.map((id) => species.find((specie) => specie.id === id).name);
}

function getCoverage(employee) {
  const respSpecies = getSpecies(employee.responsibleFor);
  const speciesLocation = getLocation(employee.responsibleFor);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: respSpecies,
    locations: speciesLocation,
  };
}

function getEmployeesCoverage({ name, id } = 0) {
  if (typeof name === 'undefined' && typeof id === 'undefined') {
    return employees.map((elm) => getCoverage(elm));
  }
  const employee = employees.find((elm) => elm.firstName === name || elm.lastName === name
  || elm.id === id);
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return getCoverage(employee);
}

module.exports = getEmployeesCoverage;
