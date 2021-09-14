const data = require('../data/zoo_data');
const { employees } = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function fullList() {
  const allEmployees = employees.map((person) => ({
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).name),
    locations: person.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
  }));
  return allEmployees;
}

function findByName(name) {
  const byName = employees.find((person) => person.firstName === name || person.lastName === name);
  return ({
    id: byName.id,
    fullName: `${byName.firstName} ${byName.lastName}`,
    species: byName.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).name),
    locations: byName.responsibleFor.map((id) => species
      .find((animal) => animal.id === id).location),
  });
}

function findById(id) {
  const byId = employees.find((person) => person.id === id);
  return ({
    id: byId.id,
    fullName: `${byId.firstName} ${byId.lastName}`,
    species: byId.responsibleFor.map((idPerson) => species
      .find((animal) => animal.id === idPerson).name),
    locations: byId.responsibleFor.map((idPerson) => species
      .find((animal) => animal.id === idPerson).location),
  });
}

function getEmployeesCoverage(parameters) {
  if (!parameters) return fullList();
  const { name, id } = parameters;
  const dataBaseCheck = employees.find((person) => person.firstName === name
  || person.lastName === name || person.id === id);
  if (dataBaseCheck === undefined) {
    throw new Error('Informações inválidas');
  }
  if (parameters.name) {
    return findByName(parameters.name);
  } if (parameters.id) {
    return findById(parameters.id);
  }
}
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));
module.exports = getEmployeesCoverage;
