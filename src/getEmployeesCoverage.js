const data = require('../data/zoo_data');

const specieIdName = (id) => data.species.find((specie) => specie.id === id).name;

const specieIdLocation = (id) => data.species.find((specie) => specie.id === id).location;

const resultNoParam = () => data.employees.map((employee) => ({
  id: employee.id,
  fullName: `${employee.firstName} ${employee.lastName}`,
  species: employee.responsibleFor.map((specieId) => specieIdName(specieId)),
  locations: employee.responsibleFor.map((specieId) => specieIdLocation(specieId)),
}));

const resultToId = (id) => data.employees
  .filter((employee) => employee.id === id)
  .map((employee) => ({
    id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: employee.responsibleFor.map((specieId) => specieIdName(specieId)),
    locations: employee.responsibleFor.map((specieId) => specieIdLocation(specieId)),
  }));

const resultToName = (name) => data.employees
  .filter((employee) => employee.firstName === name || employee.lastName === name)
  .map((person) => ({
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: person.responsibleFor.map((specieId) => specieIdName(specieId)),
    locations: person.responsibleFor.map((specieId) => specieIdLocation(specieId)),
  }));

const isEmployee = (obj) => data.employees.some((employee) =>
  employee.firstName === obj.name || employee.lastName === obj.name || employee.id === obj.id);

function getEmployeesCoverage(options) {
  if (!options) return resultNoParam();
  if (!isEmployee(options)) throw new Error('Informações inválidas');
  if (options.id) return resultToId(options.id)[0];
  if (options.name) return resultToName(options.name)[0];
}

module.exports = getEmployeesCoverage;
