const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getEmployeesCoverage(options) {
  const createCoverage = (func) => ({
    id: func.id,
    fullName: `${func.firstName} ${func.lastName}`,
    species: species
      .filter((specie) => func.responsibleFor.includes(specie.id))
      .map((specie) => specie.name),
    locations: species
      .filter((specie) => func.responsibleFor.includes(specie.id))
      .map((specie) => specie.location),
  });
  if (!options) return [...employees.map((func) => getEmployeesCoverage(func))];
  const info = Object.values(options);
  const employee = employees
    .find((func) =>
      (info.includes(func.id) || info.includes(func.firstName) || info.includes(func.lastName)));

  if (!employee) throw new Error('Informações inválidas');
  return createCoverage(employee);
}

module.exports = getEmployeesCoverage;
