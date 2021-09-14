const data = require('../data/zoo_data');

function isManager(id) {
  return data.employees.some((gerente) => gerente.managers.includes((id)));
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    return data.employees.filter((employManeger) => employManeger.managers
      .includes(managerId))
      .map((nomeFuncion) => `${nomeFuncion.firstName} ${nomeFuncion.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}
module.exports = { isManager, getRelatedEmployees };
