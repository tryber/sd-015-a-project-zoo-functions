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

function getEmployeesCoverage(options) {
  if (!options) return resultNoParam();
  if (options.id) return resultToId(options.id)[0];
}
console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
module.exports = getEmployeesCoverage;
