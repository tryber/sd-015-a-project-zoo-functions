const { employees } = require('../data/zoo_data');

function isManager(id) {
  return employees.some((iten) => iten.managers.find((it) => it === id) === id);
}
console.log(isManager('9e7d4524-363c-416a-8759-8aa7e50c0992'));

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  } else {
    return employees.filter((iten) => iten.managers.find((it) => it === managerId))
      .map((iten) => `${iten.firstName} ${iten.lastName}`);
  }
}
console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
