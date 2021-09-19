const data = require('../data/zoo_data');

// Consultei o repositório do Fernando Sena, da turma 15 - tribo A na Trybe, para entender melhor como fazer a função.
function getEmployeeByName(employeeName) {
  // seu código aqui
  if (employeeName !== undefined) {
    return data.employees.find((name) =>
      name.firstName === employeeName || name.lastName === employeeName);
  }
  return {};
}

console.log(getEmployeeByName());

module.exports = getEmployeeByName;
