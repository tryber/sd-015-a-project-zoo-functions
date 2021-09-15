const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elem) => elem.managers.find((e) => e === id) === id);
}

function getRelatedEmployees(id) {
  if (!isManager(id)) throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  return employees.filter((e) => e.managers.find((el) => el === id) === id).map((elm) =>
    `${elm.firstName} ${elm.lastName}`);
}

module.exports = { isManager, getRelatedEmployees };
