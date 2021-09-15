const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function isManager(id) {
  return employees.some((elemento) => elemento.managers.includes(id));
  // com o some pego o primeiro elemento cujo o managers possua o id passado como parametro e retorno true ou false
}
function getRelatedEmployees(managerId) {
  if (isManager(managerId) === true) {
    const r = employees.filter((v) => v.managers[0] === managerId || v.managers[1] === managerId);
    // alterei o nome dos parametros e const para passar no lint
    // caso a resposta da funcao anterior seja true ele filtra todos os objetos na array managers e compara com o paramentro
    return r.map((elemento2) => `${elemento2.firstName} ${elemento2.lastName}`);
    // pego o resultado da funcao filter acima e aplico um map para adicionar o nome em um outro array
  }
  throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
}

module.exports = { isManager, getRelatedEmployees };
