const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((employS) => employS.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    const contributors = employees.filter((employF) => employF.managers.includes(managerId));
    const result = contributors.map((employM) => `${employM.firstName} ${employM.lastName}`);
    return result;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
