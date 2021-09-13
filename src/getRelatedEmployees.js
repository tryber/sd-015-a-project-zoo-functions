const data = require('../data/zoo_data');

function isManager(id) {
  const managersArray = data.employees.map((employee) => employee.managers); // Se está nesse Macroarray, significa que a pessoa é manager de alguém.

  const organizedManagersArray = managersArray.reduce((orgManArray, microArray) =>
    orgManArray.concat(microArray));

  return organizedManagersArray.some((manager) => manager === id);
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    const relatedEmployees = data.employees.filter((employee) =>
      employee.managers.includes(managerId) === true);
    return relatedEmployees.map((employee) => `${employee.firstName} ${employee.lastName}`);
  }
}

module.exports = { isManager, getRelatedEmployees };
