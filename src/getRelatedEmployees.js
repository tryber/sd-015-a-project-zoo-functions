const data = require('../data/zoo_data');

const isManager = (id) => data.employees.some((worker) => worker.managers.includes(id));

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const empregados = data.employees.filter((ze) => ze.managers.includes(managerId));
  const retornoGetRelated = empregados.map((ze) => `${ze.firstName} ${ze.lastName}`);
  return retornoGetRelated;
}

module.exports = { isManager, getRelatedEmployees };
