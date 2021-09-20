const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const { employees } = data;

function emptyArg() {
  return employees.map((aux) => ({
    id: aux.id,
    fullName: `${aux.firstName} ${aux.lastName}`,
    species: aux.responsibleFor.map((id) => species.find((i) => i.id === id).name),
    locations: aux.responsibleFor.map((specieid) => species.find((i) =>
      i.id === specieid).location) }));
}

function fullArg(employee) {
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((id) => species.find((i) => i.id === id).name),
    locations: employee.responsibleFor.map((specieid) => species.find((i) =>
      i.id === specieid).location) };
}
function getEmployeesCoverage(info) {
  // seu código aqui
  if (!info) {
    return emptyArg();
  }
  const { name, id } = info;
  const employee = employees.find((aux) =>
    aux.firstName === name || aux.lastName === name || aux.id === id);
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return fullArg(employee);
}

module.exports = getEmployeesCoverage;
console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
