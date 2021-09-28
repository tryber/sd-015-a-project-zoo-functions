const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getAllemployeesCoverage() {
  const speciesByEmployees = employees.map((employee) => employee.responsibleFor);
  const speciesNameByEmployees = speciesByEmployees.map((arraySpecies) => arraySpecies
    .map((specie) => species.find((spc) => spc.id === specie).name));
  const speciesLocations = speciesByEmployees.map((array) => array.map((specie) => species
    .find((spc) => spc.id === specie).location));
  const employeesCoverage = employees.map((employee, index) => (
    {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: speciesNameByEmployees[index],
      locations: speciesLocations[index],
    }
  ));
  return employeesCoverage;
}

function getEachemployeeCoverage(employee) {
  const employeeCoverage = employees.find((emp) => emp.id === employee.id
    || emp.lastName === employee.name || emp.firstName === employee.name);
  if (employeeCoverage === undefined) {
    throw new Error('Informações inválidas');
  }
  const speciesEmployee = employeeCoverage.responsibleFor
    .filter((specie) => species.find((spc) => specie));
  const speciesNameEmp = speciesEmployee
    .map((specie) => species.find((spc) => spc.id === specie).name);
  const speciesLocation = speciesEmployee
    .map((specie) => species.find((spc) => spc.id === specie).location);
  return {
    id: employeeCoverage.id,
    fullName: `${employeeCoverage.firstName} ${employeeCoverage.lastName}`,
    species: speciesNameEmp,
    locations: speciesLocation,
  };
}

function getEmployeesCoverage(employee) {
  if (employee === undefined) {
    return getAllemployeesCoverage();
  }
  return getEachemployeeCoverage(employee);
}

module.exports = getEmployeesCoverage;
