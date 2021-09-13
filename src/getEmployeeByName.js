const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const { employees } = data;
  if (employeeName === undefined) {
    return {};
  }
  let employeeFilter = employees.find((element) => element.firstName === employeeName);
  if (employeeFilter === undefined) {
    employeeFilter = employees.find((element) => element.lastName === employeeName);
  }
  console.log(employeeFilter);
  return employeeFilter;
}

module.exports = getEmployeeByName;

/*
3. Implemente a função getEmployeeByName
Esta função é responsável pela busca das pessoas colaboradoras através do primeiro ou do último nome delas

O que será avaliado

ok Sem parâmetros, retorna um objeto vazio
Quando provido o primeiro nome do funcionário, retorna o objeto do funcionário
Quando provido o último nome do funcionário, retorna o objeto do funcionário
*/
