const data = require('../data/zoo_data');

// Consultei o PR do Pedro Guarize:
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/3/files#diff-3db8a3cd89cd95234101cfd56cbcf6b534dd42a4f20e9e2605d27441abbcee9b

const getEmployee = (employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((animal) => data.species
    .find((specie) => specie.id === animal).name),
  locations: employee.responsibleFor.map((animal) => data.species
    .find((specie) => specie.id === animal).location),
});

const getAllEmployees = () => data.employees.map((emp) => ({
  id: emp.id,
  fullName: `${emp.firstName} ${emp.lastName}`,
  species: emp.responsibleFor.map((animal) => data.species
    .find((specie) => specie.id === animal).name),
  locations: emp.responsibleFor.map((animal) => data.species
    .find((specie) => specie.id === animal).location),
}));

function getEmployeesCoverage(idOrName) {
  if (idOrName === undefined) {
    return getAllEmployees();
  }

  const { name, id } = idOrName;
  const emplo = data.employees.find((e) => e.firstName === name
  || e.lastName === name || e.id === id);

  if (emplo === undefined) {
    throw new Error('Informações inválidas');
  }

  return getEmployee(emplo);
}

module.exports = getEmployeesCoverage;
