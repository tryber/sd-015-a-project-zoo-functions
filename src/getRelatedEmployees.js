const data = require('../data/zoo_data');

function todosOsGerentes() {
  const gerentes = [];
  data.employees.forEach((elemento) => {
    elemento.managers.forEach((id) => {
      gerentes.push(id);
    });
  });
  /*
   Linha abaixo foi feita a partir do exemplo do site https://stackoverflow.com/questions/1960473/get-all-unique-values-in-a-javascript-array-remove-duplicates
  */
  const gerentesUnicos = gerentes.filter((chefe, index, lista) => {
    const retornoReduce = lista.indexOf(chefe) === index;
    return retornoReduce;
  });
  return gerentesUnicos;
}

const managers = todosOsGerentes();

const isManager = (id) => managers.some((gerentes) => gerentes === id);

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const empregados = data.employees.filter((ze) => ze.managers.includes(managerId));
  const retornoGetRelated = empregados.map((ze) => `${ze.firstName} ${ze.lastName}`);
  return retornoGetRelated;
}

module.exports = { isManager, getRelatedEmployees };
