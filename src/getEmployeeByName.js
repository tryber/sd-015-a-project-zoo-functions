const data = require('../data/zoo_data');

// Primeiro - Teste se foi passado alguma coisa como parametro da função!
// Segundo - Se foi passado algo no parametro, busca nos dados a primeira key que seja igual ao firstName ou lastName;
function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const person = data.employees.find((element) =>
    element.firstName === employeeName || element.lastName === employeeName);
  return person;
}

module.exports = getEmployeeByName;
