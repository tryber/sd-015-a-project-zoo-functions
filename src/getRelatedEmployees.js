const data = require('../data/zoo_data');

function isManager(idToCompare) {
  if (!idToCompare) return false;
  const { employees } = data;
  return employees.some(
    ({ managers }) => managers.some(
      (manager) => manager === idToCompare,
    ),
  );
}

function getRelatedEmployees(employeeId) {
  const { employees } = data;
  if (!isManager(employeeId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  let responsibleForEmployees = [];
  employees.forEach(
    ({ firstName, lastName, managers }) => {
      const actualManager = managers.some((manager) => manager === employeeId);
      if (actualManager) {
        responsibleForEmployees = [
          ...responsibleForEmployees,
          `${firstName} ${lastName}`,
        ];
      }
    },
  );
  return responsibleForEmployees;
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
