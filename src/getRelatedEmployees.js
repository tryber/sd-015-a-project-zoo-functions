const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const managers = data.employees.some((manager) => manager.managers.includes(id));

  return managers;
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }

  const subordinados = data.employees.filter((obj) => obj.managers.includes(managerId));
  // console.log(subordinados);
  return subordinados.map((obj) => `${obj.firstName} ${obj.lastName}`);
}

// console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2'));

module.exports = { isManager, getRelatedEmployees };
