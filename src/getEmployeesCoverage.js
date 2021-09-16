const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const specieIdName = (id) => {
  return data.species.find((specie) => specie.id === id).name;
};

const specieIdLocation = (id) => {
  return data.species.find((specie) => specie.id === id).location
}
function getEmployeesCoverage(options) {
  if (!options) {
    return data.employees.map((employee) => ({
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: employee.responsibleFor.map((specieId) => specieIdName(specieId)),
      locations: employee.responsibleFor.map((specieId) => specieIdLocation(specieId)),
    }));
  }
}
console.log(getEmployeesCoverage());
module.exports = getEmployeesCoverage;
