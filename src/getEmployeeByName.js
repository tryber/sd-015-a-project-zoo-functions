const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) return {};
  return data.employees.find((fullName) => fullName.firstName === employeeName
  || fullName.lastName === employeeName);
}

// Na primeira condição, verifica que se o emplooyeeName for indefinido, retornará um obj vazio;
// Na segunda condição, buscamos através do data.employees.find o nome completo dos colaboradores, dizendo que o primeiro e o ultimo serão integrados à função getEmployeeByName;

module.exports = getEmployeeByName;
