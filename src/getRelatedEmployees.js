const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  const allManagers = [];
  const managers = () => {
    // Faz uma busca em cada funcionario pelos seus gerentes e coloca dentro do array "allManagers"
    employees.forEach((person) => { allManagers.push(...person.managers); });
  };
  managers();
  // Retorna true ou false dependendo se o id passado como parametro é de um gerente ou não:
  return allManagers.some((managerId) => managerId === id);
}

function getRelatedEmployees(managerId) {
  // Verifica se o valor do parametro é um ID de um gerente:
  if (isManager(managerId) === true) {
    // Busca em "employees" por funcionarios que possuem o id do gerente na chave de "managers"
    const employeesManaged = employees.filter((person) => person.managers.includes(managerId))
      .map((person) => `${person.firstName} ${person.lastName}`);
    return employeesManaged;
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
