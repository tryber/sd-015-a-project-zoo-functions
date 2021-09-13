const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((empl) => empl.managers.includes(id));
}

const error = () => {
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
};

const getRelatedEmployees = (managerId) => (isManager(managerId)
  ? employees.filter((elem) => elem.managers.includes(managerId))
    .map((empl) => `${empl.firstName} ${empl.lastName}`)
  : error());

module.exports = { isManager, getRelatedEmployees };
