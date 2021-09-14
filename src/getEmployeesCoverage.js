const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function criarObjeto(objeto) {
  const bixinhos = objeto.responsibleFor.map((id) => species.find((bixo) => bixo.id === id).name);
  return {
    id: objeto.id,
    fullName: `${objeto.firstName} ${objeto.lastName}`,
    species: bixinhos,
    locations: bixinhos.map((bixo) => species.find((local) => local.name === bixo).location),
  };
}

function verificarNomeOuID(joe, nomeId) {
  return joe.id === nomeId.id || joe.firstName === nomeId.name || joe.lastName === nomeId.name;
}

function getEmployeesCoverage(idOrName) {
  let resposta = {};
  if (idOrName === undefined) {
    resposta = data.employees.map((elemento) => criarObjeto(elemento));
  } else {
    const empregado = data.employees.find((ze) => verificarNomeOuID(ze, idOrName));
    if (empregado !== undefined) {
      resposta = criarObjeto(empregado);
    } else {
      throw new Error('Informações inválidas');
    }
  }
  return resposta;
}

module.exports = getEmployeesCoverage;
