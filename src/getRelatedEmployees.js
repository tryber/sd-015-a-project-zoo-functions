const { employees } = require('../data/zoo_data');

const isManager = (id) => employees.some((element) => element.managers.includes(id));

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.filter((element) => element.managers.includes(managerId))
    .map((callnames) => `${callnames.firstName} ${callnames.lastName}`);
};
module.exports = { isManager, getRelatedEmployees };
