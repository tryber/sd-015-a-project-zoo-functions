const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

// Lógica do exercício baseada no Projeto Zoo Functions de Luiz Módolo: [Luiz Módolo] Zoo Functions Project #107
// Source link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/107/files

const employeeList = [];
const eachEmployee = employees.forEach((employee) =>
  employeeList.push({
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((mapSpecie) => mapSpecie.name),
    locations: species.filter((specie) =>
      employee.responsibleFor.includes(specie.id)).map((mapSpecie) => mapSpecie.location),
  }));
console.log(eachEmployee);

function getEmployeesCoverage(obj) {
  if (!obj) return employeeList;
  const { name, id } = obj;
  if (employeeList.find((employee) => employee.id === id)) {
    return employeeList.find((employee) => employee.id === id);
  }
  if (employeeList.find((employee) => employee.fullName.includes(name))) {
    return employeeList.find((employee) => employee.fullName.includes(name));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
