const data = require('../data/zoo_data');

const { employees } = data;

function isManager(id) {
  return employees
    .map((elem) => elem.managers)
    .some((elem2) => elem2.includes(id));
}

// Os managers são: Emery, burl, Ola e stephanie
// se o valor passado constar no 'managers:' === true

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const subalternos = employees.filter((elem) =>
      elem.managers.includes(managerId));
    // console.log('subalternos', subalternos);
    return subalternos.map((name) => `${name.firstName} ${name.lastName}`);
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

console.log(isManager('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); // false
console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2')); // true
console.log(getRelatedEmployees('b0dc644a-5335-489b-8a2c-4e086c7819a2')); // true
// console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad')); // false

module.exports = { isManager, getRelatedEmployees };

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

// throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
