const data = require('../data/zoo_data');

const info = data.employees.map((pessoa) => {
  const infoObject = {
    id: pessoa.id,
    fullName: `${pessoa.firstName} ${pessoa.lastName}`,
    species: pessoa.responsibleFor.map((IdAnimal) =>
      data.species.find((element) => element.id === IdAnimal).name),
    locations: pessoa.responsibleFor.map((IdAnimal) =>
      data.species.find((element) => element.id === IdAnimal).location),
  };
  return infoObject;
});

function getEmployeesCoverage(param = info) {
  const verify = info.find((element) =>
    element.fullName.includes(param.name) || element.id === param.id);
  if (param.name || param.id) {
    if (verify === undefined) {
      throw new Error('Informações inválidas');
    }
    return verify;
  }
  return param;
}

module.exports = getEmployeesCoverage;
