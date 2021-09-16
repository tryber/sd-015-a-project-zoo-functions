const data = require('../data/zoo_data');

const path = data.employees;

function isManager(id) {
  const managerOrNot = path.some((element) => element.managers.includes(id));
  return managerOrNot;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const filterSub = path.filter((element) => element.managers.includes(managerId));
    const subordinateFull = filterSub.map((sub) => `${sub.firstName} ${sub.lastName}`);
    return subordinateFull;
  } throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
