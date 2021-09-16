const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elem) => elem.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return employees.filter((elem) => elem.managers.includes(managerId))
      .map((elem) => `${elem.firstName} ${elem.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
