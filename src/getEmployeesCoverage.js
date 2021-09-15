const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function makeDefault() {
  // faco um map para criar um obj com as inf de employees
  return employees.map((element) => ({
    id: element.id,
    fullName: `${element.firstName} ${element.lastName}`,
    species: element.responsibleFor.map((elem) => species.find((elem2) => elem2.id === elem)
      .name),
    locations: element.responsibleFor.map((elem) => species.find((elem2) => elem2.id === elem)
      .location),
    // uso outro map para para comparar as informacoes de especie com employees
  }));
}

function getEmployeesCoverage(param) {
  // caso o parametro n seja definido chama a funcao paradra
  if (!param) {
    return makeDefault();
  }
  const { id, name } = param;
  // caso o param seja valido ele retorna o obj com os dados passados
  if (employees.find((x) => (x.firstName === name || x.lastName === name || x.id === id))) {
    const obj = employees.find((x) => (x.firstName === name || x.lastName === name || x.id === id));
    return {
      id: obj.id,
      fullName: `${obj.firstName} ${obj.lastName}`,
      species: obj.responsibleFor.map((elem) => species.find((elem2) => elem2.id === elem)
        .name),
      locations: obj.responsibleFor.map((elem) => species.find((elem2) => elem2.id === elem)
        .location),
    };
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
