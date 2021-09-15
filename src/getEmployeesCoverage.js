const { employees, species: animals } = require('../data/zoo_data');

// Armnazena os ids dos employees
const ids = [];
const getEmployees = employees.map((employee) => {
  const { id, firstName, lastName, responsibleFor: species } = employee;
  const fullName = `${firstName} ${lastName}`;
  ids.push(id);
  return { id, fullName, species };
});

const getSpecies = animals.map((specie) => {
  const { id, name, location } = specie;
  return { id, name, location };
});

function mapAndFind(employee, key) {
  return employee.species
    .map((id) => getSpecies.find((specie) => specie.id === id)[key]);
}

const addSpeciesAndLocations = getEmployees.map((employee) => {
  const species = mapAndFind(employee, 'name');
  const locations = mapAndFind(employee, 'location');

  const { id, fullName } = employee;
  return { id, fullName, species, locations };
});
// Pega os nomes completos e os separam em um array a ser checado
const names = getEmployees.reduce((allNames, actualName) =>
  `${allNames} ${actualName.fullName}`, '').split(' ').slice(1);

function getEmployeesCoverage(options) {
  // Sem parâmetros
  if (!options) {
    return addSpeciesAndLocations;
  }
  // Dado um nome
  const checkEntry = names.some((name) => options.name === name);

  if (checkEntry) {
    return addSpeciesAndLocations.find((employee) => employee.fullName.includes(options.name));
  }
  // Dado um ID
  const checkID = ids.some((id) => options.id === id);

  if (checkID) {
    return addSpeciesAndLocations.find((employee) => employee.id === options.id);
  }
  throw new Error('Informações inválidas');
}

console.log(getEmployeesCoverage({ id: '0e7b460e-acf4-4e17-bcb3-ee472265db83' }));

module.exports = getEmployeesCoverage;
