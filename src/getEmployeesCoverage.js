const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(arr) {
  const animalsId = arr.responsibleFor.map((element) => element);
  const animals = animalsId.map((element) => species.reduce((acc, value) =>
    (value.id === element ? acc.concat(value.name) : acc), ''));
  return animals;
}

function getLocate(arr) {
  const animalsId = arr.responsibleFor.map((element) => element);
  const location = animalsId.map((element) => species.reduce((acc, value) =>
    (value.id === element ? acc.concat(value.location) : acc), ''));
  return location;
}

function allEmployees() {
  const array = [];
  employees.forEach(({ id, firstName, lastName, responsibleFor }) => {
    const animalsId = responsibleFor.map((element) => element);
    const animalsName = animalsId.map((element) => species.reduce((acc, value) =>
      (value.id === element ? acc.concat(value.name) : acc), ''));
    const location = animalsId.map((element) => species.reduce((acc, value) =>
      (value.id === element ? acc.concat(value.location) : acc), ''));
    array.push({ id,
      fullName: `${firstName} ${lastName}`,
      species: animalsName,
      locations: location });
  });
  return array;
}

function getEmployeesCoverage(coverage) {
  if (!coverage) {
    return allEmployees();
  }
  const coverageCheck = employees.every(({ id, firstName, lastName }) =>
    id !== coverage.id && firstName !== coverage.name && lastName !== coverage.name);
  if (coverageCheck) {
    throw new Error('Informações inválidas');
  }
  const objectEmployee = employees.find(({ id, firstName, lastName }) =>
    (id === coverage.id || firstName === coverage.name || lastName === coverage.name));
  const object = {
    id: objectEmployee.id,
    fullName: (`${objectEmployee.firstName} ${objectEmployee.lastName}`),
    species: getSpecies(objectEmployee),
    locations: getLocate(objectEmployee),
  };
  return object;
}

console.log(getEmployeesCoverage({ name: 'Sharonda' }));

module.exports = getEmployeesCoverage;
