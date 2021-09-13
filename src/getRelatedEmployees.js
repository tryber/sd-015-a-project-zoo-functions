const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  let manager = false;
  const numberManagers = employees.find((employee) => employee.id === id)
    .managers.length;
  console.log(numberManagers);
  if (numberManagers < 0) {
    manager = true;
  }
  return manager;
}

isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad');

function getRelatedEmployees(managerId) {
  // seu código aqui
}

module.exports = { isManager, getRelatedEmployees };
