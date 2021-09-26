const data = require('../data/zoo_data');

function isManager(id) {
  const gerente = data.employees;
  let saida = false;
  for (let index = 0; index < gerente.length; index += 1) {
    if ((gerente[index].managers.length !== 0) && (!saida)) {
      const existe = gerente[index].managers;
      saida = existe.some((elemento) => elemento === id);
    }
  }
  return saida;
}

function colaboraGerente(managerId) {
  const arrayColabora = [];
  const gerente = data.employees;
  gerente.forEach((elemento, index) => {
    for (let index1 = 0; index1 < elemento.managers.length; index1 += 1) {
      const aaa = elemento.managers;
      aaa.forEach((elemento1) => {
        if (elemento1 === managerId) {
          arrayColabora.push(`${gerente[index].firstName} ${gerente[index].lastName}`);
        }
      });
    }
  });
  return arrayColabora;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId)) {
    return (colaboraGerente(managerId));
  } else {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
}

module.exports = { isManager, getRelatedEmployees };
