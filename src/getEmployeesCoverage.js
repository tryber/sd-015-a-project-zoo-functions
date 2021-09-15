const { employees, species } = require('../data/zoo_data');

function getEmployeesCoverage(options) {
  // seu código aqui
  const getEmployees = employees.map((employee) => { 
    const { id, firstName, lastName, responsibleFor : species } = employee;
    const fullName = `${firstName} ${lastName}`;
    return { id, fullName, species };
  });

  const getSpecies = species.map((specie) => {
    const { id, name, location } = specie;
    return { id, name, location };
  })

  function mapAndFind(employee, key) {
    return employee.species
      .map((id) => id = getSpecies.find((specie) => specie.id === id)[key]);
  }

  const addSpeciesAndLocations = getEmployees.map((employee) => {
    
    const species = mapAndFind(employee, 'name');
    const locations = mapAndFind(employee, 'location');

    const { id, fullName } = employee;
    return { id, fullName, species, locations };
  });

  console.log(addSpeciesAndLocations);

  if (!options) {
    return addSpeciesAndLocations;
  }
  if (options.name) {
    return addSpeciesAndLocations.
  }
  if (options.id) {

  }
}

getEmployeesCoverage();

module.exports = getEmployeesCoverage;
