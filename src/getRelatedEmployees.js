const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees.some((emp) => emp.managers.includes(id));

const myError = () => {
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

const getRelatedEmployees = (managerId) => (isManager(managerId)
  ? employees.filter((elem) => elem.managers.includes(managerId))
    .map((emp) => `${emp.firstName} ${emp.lastName}`)
  : myError());

module.exports = { isManager, getRelatedEmployees };
