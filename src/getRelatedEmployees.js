const data = require('../data/zoo_data');

const { employees } = data;

const findManagers = () => {
  const managers = [];
  employees.forEach((e) => {
    if (e.managers.length !== 0) {
      e.managers.forEach((man) => {
        if (!managers.includes(man)) managers.push(man);
      });
    }
  });
  return managers;
};

function isManager(id) {
  return findManagers().some((e) => e === id);
}

function getRelatedEmployees(managerId) {
  const err = 'O id inserido não é de uma pessoa colaboradora gerente!';
  if (!isManager(managerId)) throw new Error(err);
  const emp = [];
  employees.forEach((e) => {
    if (e.managers.includes(managerId)) emp.push(`${e.firstName} ${e.lastName}`);
  });
  return emp;
}

module.exports = { isManager, getRelatedEmployees };
