const {
  employees,
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function searchName(n) {
  const nameCondition = employees.find((person) => person.firstName === n || person.lastName === n);
  return {
    id: nameCondition.id,
    fullName: `${nameCondition.firstName} ${nameCondition.lastName}`,
    species: nameCondition.responsibleFor.map((animal) => species
      .find((e) => e.id === animal).name),
    locations: nameCondition.responsibleFor.map((e) =>
      species.find((a) => a.id === e).name).map((el) =>
      species.find((e) => e.name === el).location),
  };
}

function noParameter() {
  return employees.map((elem) => ({
    id: elem.id,
    fullName: `${elem.firstName} ${elem.lastName}`,
    species: elem.responsibleFor.map((animal) => species.find((e) => e.id === animal).name),
    locations: elem.responsibleFor.map((animal) => species.find((e) => e.id === animal).location),
  }));
}

function idParameter(search) {
  if (search !== 'Id inválido') {
    const idCondition = employees.find((person) => person.id === search);
    return {
      id: idCondition.id,
      fullName: `${idCondition.firstName} ${idCondition.lastName}`,
      species: idCondition.responsibleFor.map((animal) => species
        .find((e) => e.id === animal).name),
      locations: idCondition.responsibleFor.map((e) =>
        species.find((a) => a.id === e).name).map((el) =>
        species.find((e) => e.name === el).location),
    };
  }
}

function getEmployeesCoverage(object) {
  if (object !== undefined && object.id === 'Id inválido') throw new Error('Informações inválidas');
  if (object === undefined) return noParameter();
  if (object.id) return idParameter(object.id);
  return searchName(object.name);
}

console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
