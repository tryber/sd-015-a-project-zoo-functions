const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }

  const resultado = employees.find((elemento) => elemento.firstName.includes(employeeName)
                                              || elemento.lastName.includes(employeeName));
  return resultado;
}

module.exports = getEmployeeByName;
