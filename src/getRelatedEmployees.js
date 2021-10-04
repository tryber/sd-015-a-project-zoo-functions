// ref: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/145
const data = require('../data/zoo_data');

const { employees } = data;
// Crie a gestão dos funcionários de acordo com o respectivo gerente
function isManager(id) {
  // seu código aqui
  return employees.some((employee) => employee.managers.some((manager) => manager === id));
}

function getRelatedEmployees(managerId) {
  // seu código aqui
  if (isManager(managerId) === true) {
    const funcionarios = data.employees.filter((employee) => employee.managers.includes(managerId));
    return funcionarios.map((element) => `${element.firstName} ${element.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
