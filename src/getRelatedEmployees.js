const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.includes(id));

const idError = () => {
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

const getRelatedEmployees = (managerId) => (isManager(managerId)
  ? employees.filter((elem) => elem.managers.includes(managerId))
    .map((emp) => `${emp.firstName} ${emp.lastName}`)
  : idError());

module.exports = { isManager, getRelatedEmployees };
