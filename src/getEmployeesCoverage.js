const data = require('../data/zoo_data');

const { employees, species } = data;

const singleEmployee = (emplo) => ({
  id: emplo.id,
  fullName: `${emplo.firstName} ${emplo.lastName}`,
  species: emplo.responsibleFor.map((ani) => species.find((spe) => spe.id === ani).name),
  locations: emplo.responsibleFor.map((ani) => species.find((spe) => spe.id === ani).location),
});

const allEmployees = () =>
  employees.map((emp) => ({
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: emp.responsibleFor.map((ani) => species.find((spe) => spe.id === ani).name),
    locations: emp.responsibleFor.map((ani) => species.find((spe) => spe.id === ani).location),
  }));

const getEmployeesCoverage = (idOrName) => {
  if (!idOrName) return allEmployees();

  const { name, id } = idOrName;
  const emplo = employees.find((e) => e.firstName === name || e.lastName === name || e.id === id);

  if (!emplo) throw new Error('Informações inválidas');

  return singleEmployee(emplo);
};

module.exports = getEmployeesCoverage;
