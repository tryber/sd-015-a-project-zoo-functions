const data = require('../data/zoo_data');

const getNameOrId = (no, nomeid) => {
  const veri = no.id === nomeid.id || no.firstName === nomeid.name || no.lastName === nomeid.name;
  return veri;
};

const criarObjeto = (obj) => {
  const pet = obj.responsibleFor.map((id) => data.species.find((bicho) => bicho.id === id).name);
  const dados = {
    id: obj.id,
    fullName: `${obj.firstName} ${obj.lastName}`,
    species: pet,
    locations: pet.map((animal) => data.species.find((local) => local.name === animal).location),
  };
  return dados;
};

const getEmployeesCoverage = (idName) => {
  let resposta = {};
  if (!idName) {
    resposta = data.employees.map((obj) => criarObjeto(obj));
    return resposta;
  }
  const empregado = data.employees.find((func) => getNameOrId(func, idName));
  if (empregado) {
    resposta = criarObjeto(empregado);
    return resposta;
  }
  if (!empregado) throw new Error('Informações inválidas');
  return resposta;
};

module.exports = getEmployeesCoverage;
