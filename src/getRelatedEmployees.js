const data = require('../data/zoo_data');

// console.log(data.employees);

function isManager(id) {
  const result = data.employees.some((element) => element.managers.includes(id));
  return result;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const related = [];
  data.employees.forEach((element) => {
    if (element.managers.includes(managerId) === true) {
      related.push(`${element.firstName} ${element.lastName}`);
    }
  });
  return related;
}

module.exports = { isManager, getRelatedEmployees };
