const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

function getEmployeesCoverage(options) {
  // seu código aqui
  const createCoverage = (emp) => ({
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: species.filter((specie) => emp.responsibleFor.includes(specie.id))
      .map((specie) => specie.name),
    locations: species.filter((specie) => emp.responsibleFor.includes(specie.id))
      .map((specie) => specie.location),
  });
  if (!options) return [...employees.map((emp) => getEmployeesCoverage(emp))];
  const info = Object.values(options);
  const employee = employees
    .find((emp) =>
      (info.includes(emp.id) || info.includes(emp.firstName) || info.includes(emp.lastName)));
  if (!employee) throw new Error('Informações inválidas');
  return createCoverage(employee);
}
module.exports = getEmployeesCoverage;

getEmployeesCoverage({ name: 'Sharonda' });
