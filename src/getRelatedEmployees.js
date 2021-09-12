const data = require('../data/zoo_data');

function todosOsGerentes() {
  const gerentes = [];
  data.employees.forEach((elemento) => {
    elemento.managers.forEach((id) => {
      gerentes.push(id);
    });
  });
  // Linha abaixo feito com a ajuda do Pedro Guarize e do Leonardo Felix;
  return [...new Set(gerentes)];
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
