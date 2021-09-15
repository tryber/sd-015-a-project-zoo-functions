const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  // seu código aqui
  if (!employeeName) return {}; // se não tiver parametro retorna um objeto vazio
  return employees.find((employee) =>
    employee.firstName === employeeName || employee.lastName === employeeName);
  // se tiver ele encontra o elemento e retorna o primeiro ou ultimo nome que ele passar no parametro
}

module.exports = getEmployeeByName;
