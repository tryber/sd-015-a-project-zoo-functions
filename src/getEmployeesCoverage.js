const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// loureiro-lucas repositório consultado: https://github.com/tryber/sd-015-a-project-zoo-functions/blob/48a6abad7076bebc8cb7d8e2f42900770fc88071/src/getEmployeesCoverage.js

// EMPLOYEE COVERAGE
const employeeCoverage = (thisEmployee) => ({
  id: thisEmployee.id,
  fullName: `${thisEmployee.firstName} ${thisEmployee.lastName}`,
  species: thisEmployee.responsibleFor
    .map((specieId) => species
      .find((specie) => specie.id === specieId).name),
  locations: thisEmployee.responsibleFor
    .map((specieId) => species
      .find((specie) => specie.id === specieId).location),
});

// CASE THERE IS NO ARGUMENT
const noTarget = () => employees.map((thisEmployee) => employeeCoverage(thisEmployee));

// CASE ARGUMENT IS A NAME
const getByName = (employeeName) => {
  const thisEmployee = employees.find((employee) => employee.firstName === employeeName)
  || employees.find((employee) => employee.lastName === employeeName);
  return employeeCoverage(thisEmployee);
};

// CASE ARGUMENT IS AN ID
const getById = (employeeId) => {
  const thisEmployee = employees.find((employee) => employee.id === employeeId);
  return employeeCoverage(thisEmployee);
};

// MAIN FUNCTION
const getEmployeesCoverage = (employeeTarget) => {
  if (!employeeTarget) return noTarget();

  if (employees.map((employee) => employee.firstName).includes(employeeTarget.name)
  || employees.map((employee) => employee.lastName).includes(employeeTarget.name)) {
    return getByName(employeeTarget.name);
  }

  if (employees.map((employee) => employee.id).includes(employeeTarget.id)) {
    return getById(employeeTarget.id);
  }

  throw new Error('Informações inválidas');
};
module.exports = getEmployeesCoverage;
