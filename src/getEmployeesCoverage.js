const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpecies(arr) {
  const animalsId = arr.responsibleFor.map((element) => element);
  return animalsId.map((element) => species.reduce((acc, value) =>
    (value.id === element ? acc.concat(value.name) : acc), ''));
}

function getLocate(arr) {
  const animalsId = arr.responsibleFor.map((element) => element);
  return animalsId.map((element) => species.reduce((acc, value) =>
    (value.id === element ? acc.concat(value.location) : acc), ''));
}

function allAnimals(animals, val) {
  return animals.map((element) => species.reduce((acc, value) =>
    (value.id === element ? acc.concat(value[val]) : acc), ''));
}

function allLocations(animals, val) {
  return animals.map((element) => species.reduce((acc, value) =>
    (value.id === element ? acc.concat(value[val]) : acc), ''));
}
function allEmployees() {
  const array = [];
  employees.forEach(({ id, firstName, lastName, responsibleFor }) => {
    const animalsId = responsibleFor.map((element) => element);
    array.push({ id,
      fullName: `${firstName} ${lastName}`,
      species: allAnimals(animalsId, 'name'),
      locations: allLocations(animalsId, 'location'),
    });
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

console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
