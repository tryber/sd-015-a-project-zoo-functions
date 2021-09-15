const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const res = employees.find((item) => item.managers.includes(id));
  return !!res;
}

function getRelatedEmployees(managerId) {
  const eGererente = isManager(managerId);
  if (eGererente) {
    const res = employees.filter((item) => item.managers.includes(managerId));
    const nomes = res.map((item) => `${item.firstName} ${item.lastName}`);
    return nomes;
  }

  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
