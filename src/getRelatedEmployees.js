const data = require('../data/zoo_data');

function isManager(id) {
  // seu código aqui
  const managersIds = data.employees.map((employee) => employee.managers).flat(); // Estamos pegando os ids de todos os managers e colocando dentro de um array. Como o resultado vai dar varios arrays dentro de arrays, usamos o .flat() para colocar os resultados dentro de um único array.

  return managersIds.includes(id);
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === false) {
    throw Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const employeeObject = data.employees.filter((employee) => employee.managers.includes(managerId));
  const arrayOfNames = employeeObject.map((person) => `${person.firstName} ${person.lastName}`);
  return arrayOfNames;
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992')); // true
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));
module.exports = { isManager, getRelatedEmployees };
