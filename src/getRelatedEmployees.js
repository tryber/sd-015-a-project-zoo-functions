const data = require('../data/zoo_data');

// 1 - isManager - que será responsável por verificar se uma pessoa colaboradora é gerente ou não. O retorno dessa função deve ser um booleano: true ou false;
// const isManager = (id) => data.employees.filter((e) => {
//   return e.id.includes(id);
// }).some((j) => j.managers.length === 0);

const isManager = (id) => data.employees.some((e) => e.managers.includes(id));

// 2 - getRelatedEmployees - que utiliza a primeira função para apresentar as seguintes saídas:

// se for uma pessoa colaboradora gerente, deve retornar um array contendo os nomes das pessoas colaboradoras que ela é responsável;
// se não for uma pessoa colaboradora gerente, deverá ser lançado um erro gerado com a função construtora Error da biblioteca padrão do JavaScript com a mensagem "O id inserido não é de uma pessoa colaboradora gerente!".

const getRelatedEmployees = (managerId) => {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return data.employees.filter((e) => e.managers.includes(managerId))
    .map((j) => `${j.firstName} ${j.lastName}`); // filtra todos os que possuem o ID do manager e retorna um map com first e last name
};

console.log(getRelatedEmployees('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = { isManager, getRelatedEmployees };
