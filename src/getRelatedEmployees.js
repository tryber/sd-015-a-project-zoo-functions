const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const isManager = (id) => employees
  .some((employee) => employee.managers
    .some((manager) => manager === id));
// usei o some() para retornar um valor booleano que responde se o id passado como parâmetro pertence a algum funcionário gerente.

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  // caso o valor do parametro não seja de um funcionário gerente retornar um Error com a mensagem a cima.
  } else {
    return employees
      .filter((employee) => employee.managers
        .includes(managerId))
      .map((related) => `${related.firstName} ${related.lastName}`);
  }
// usa um filter para descobrir quem são os funcionários que esse gerente é responsável e cria um array usando o map com seus nomes completos (template literals);
};

module.exports = { isManager, getRelatedEmployees };
