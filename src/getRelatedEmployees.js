const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees.some((employee) => employee.managers.includes(id));
  // Retorna true se o id passado for de um gerente ou Retorna false se o id passado não for de um gerente;
  // O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.
  // O método includes() determina se um array contém um determinado elemento, retornando true ou false apropriadamente.
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
    // booleano !isManager é false
  } else {
    const arrayManagers = employees.filter((employee) => employee.managers.includes(managerId));
    // O método filter() vai criar um novo array com todos os elementos que passaram no teste implementado pela função fornecida includes(managerId).

    const fullNames = arrayManagers.map((person) => `${person.firstName} ${person.lastName}`);
    return fullNames;
    //  O método map() invoca a função callback passada por argumento para cada elemento do Array e devolve um novo Array como resultado.
  }
  // se a pessoa for colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável => Retorna um array contendo nome e sobrenome das pessoas colaboradoras gerenciadas por determinada pessoa com cargo de gerência.
  // [ 'Burl Bethea', 'Ola Orloff', 'Emery Elser' ];
  // se não for uma pessoa colaboradora gerente, deverá ser lançado um erro: throw new Error('O id inserido não é de uma pessoa colaboradora gerente!'); Dispara um erro com a mensagem: "O id inserido não é de uma pessoa colaboradora gerente!".
}

module.exports = { isManager, getRelatedEmployees };
