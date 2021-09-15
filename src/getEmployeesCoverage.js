const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function dados(info) {
  const objValor = Object.values(info);
  const empregadoFiltrado = employees.filter((i) =>
    i.firstName.includes(objValor) || i.lastName.includes(objValor) || i.id.includes(objValor))
    .pop();
  const { responsibleFor } = empregadoFiltrado;
  const animais = species.filter((item) => responsibleFor.includes(item.id));

  return {
    id: empregadoFiltrado.id,
    fullName: `${empregadoFiltrado.firstName} ${empregadoFiltrado.lastName}`,
    species: animais.map((item) => item.name),
    locations: animais.map((item) => item.location),
  };
}

function getEmployeesCoverage(info) {
  if (!info) {
    return employees.map((employee) => dados({ id: employee.id }));
  }

  const objValor = Object.values(info);
  const empregadoFiltrado = employees.filter((i) =>
    i.firstName.includes(objValor) || i.lastName.includes(objValor) || i.id.includes(objValor))
    .pop();
  if (!empregadoFiltrado) {
    throw new Error('Informações inválidas');
  }
  return dados(info);
}

module.exports = getEmployeesCoverage;
