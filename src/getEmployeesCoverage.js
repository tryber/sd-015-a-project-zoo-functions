const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpecies = (employee) => employee.responsibleFor.map((ani) => species
  .find((spe) => spe.id === ani).name);
const getLocation = (employee) => employee.responsibleFor.map((ani) => species
  .find((spe) => spe.id === ani).location);

const singleEmployee = (emplo) => ({
  id: emplo.id,
  fullName: `${emplo.firstName} ${emplo.lastName}`,
  species: getSpecies(emplo),
  locations: getLocation(emplo),
});

const allEmployees = () => employees.map((emp) => ({
  id: emp.id,
  fullName: `${emp.firstName} ${emp.lastName}`,
  species: getSpecies(emp),
  locations: getLocation(emp),
}));

const getEmployeesCoverage = (idOrName) => {
  if (idOrName === undefined) {
    return allEmployees();
  }
  const { name, id } = idOrName;
  const emplo = employees.find((elem) => elem.firstName === name
  || elem.lastName === name || elem.id === id);

  if (emplo === undefined) {
    throw new Error('Informações inválidas');
  }
  return singleEmployee(emplo);
};

module.exports = getEmployeesCoverage;
