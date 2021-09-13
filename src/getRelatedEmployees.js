const {
  employees,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elem) => elem.managers.includes(id));
}

function getRelatedEmployees(managerId) {
  const manager = employees.filter((current) => current.managers.includes(managerId));

  if (isManager(manager) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  console.log(manager.map((elem) => `${elem.firstName} ${elem.lastName}`));
  return manager.map((elem) => `${elem.firstName} ${elem.lastName}`);
}

module.exports = {
  isManager,
  getRelatedEmployees,
};
