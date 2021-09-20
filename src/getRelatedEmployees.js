const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// www.youtube.com/playlist?list=PLYgzkrmJnLwo-pTURSTti_ljhjWB9BF7 - mentoria sabado e git Apolo

function isManager(id) {
  return employees.some((manager) => manager.managers.includes((id)));
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((employManeger) => employManeger.managers
    .includes(managerId))
    .map((nomeFuncion) => `${nomeFuncion.firstName} ${nomeFuncion.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
