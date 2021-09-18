const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployee(emp) {
  const speciesInResp = emp.responsibleFor
    .map((spe) => species
      .find((el) => el.id === spe));

  return {
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: speciesInResp.map((spe) => spe.name),
    locations: speciesInResp.map((spe) => spe.location),
  };
}

function getAllEmployees() {
  const allEmp = employees.map((emp) => ({
    id: emp.id,
    fullName: `${emp.firstName} ${emp.lastName}`,
    species: emp.responsibleFor.map((spe) => species.find((el) => el.id === spe).name),
    locations: emp.responsibleFor.map((spe) => species.find((el) => el.id === spe).location),
  }));
  return allEmp;
}

function getEmployeesCoverage(objeto) {
  // seu código aqui
  if (!objeto) return getAllEmployees();
  const { name, id } = objeto;
  const empSelected = employees
    .find((emp) => emp.firstName === name || emp.lastName === name || emp.id === id);

  if (!empSelected) {
    throw new Error('Informações inválidas');
  }

  return getEmployee(empSelected);

  // console.log(result);
}

console.log(getEmployeesCoverage({ name: 'Spry' }));
module.exports = getEmployeesCoverage;
