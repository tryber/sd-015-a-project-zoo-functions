const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
// Função que busca o empregado no array "employees" usando como parametro o nome ou o sobrenome:
function getEmployeeByName(Name) {
  if (!Name) {
    return {};
  }
  return employees.find((person) => person.firstName === Name || person.lastName === Name);
}

module.exports = getEmployeeByName;
