const data = require('../data/zoo_data');

function isManager(id) {
  const validateManager = data.employees.some((element) => element.managers.includes(id));
  return validateManager;
}

function getRelatedEmployees(managerId) {
  const managerResponse = [];

  if (!isManager(managerId)) {
    throw new Error(
      'O id inserido não é de uma pessoa colaboradora gerente!',
    );
  }
  data.employees.forEach((person) => {
    if (person.managers.includes(managerId)) {
      managerResponse.push(`${person.firstName} ${person.lastName}`);
    }
  });
  return managerResponse;
}
// getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992');
module.exports = { isManager, getRelatedEmployees };
