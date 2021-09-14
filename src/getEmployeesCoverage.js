const data = require('../data/zoo_data');

function getEmployees() {
  return data.employees;
}

function getSpecies() {
  return data.species;
}

function findByAttribute(elemntArray, attribute, value) {
  return elemntArray.find((element) => element[attribute] === value);
}

function findByNameOrLastName(employess, name) {
  let employee = findByAttribute(employess, 'firstName', name);
  if (!employee) {
    employee = findByAttribute(employess, 'lastName', name);
  }
  return employee;
}

function getEmployeeByAttribute(name, id) {
  const employees = getEmployees();
  let employee;
  if (name) {
    employee = findByNameOrLastName(employees, name);
  } else if (id) {
    employee = findByAttribute(employees, 'id', id);
  }
  if (!employee) {
    throw new Error('Informações inválidas');
  }
  return employee;
}

function getAnimalsFilteredBySpeciesId(speciesId) {
  const animals = getSpecies();
  return animals.filter((animal) => speciesId.includes(animal.id));
}

function getSpeciesByIds(speciesId) {
  const animals = getAnimalsFilteredBySpeciesId(speciesId);
  return animals.map((animal) => animal.name);
}

function getLocationsByspeciesIds(speciesId) {
  const animals = getAnimalsFilteredBySpeciesId(speciesId);
  const locations = [];
  animals.forEach((animal) => {
    if (!locations.includes(animal.id)) {
      locations.push(animal.location);
    }
  });
  return locations;
}

function createCoverage(id, firstName, lastName, speciesId) {
  return {
    id,
    fullName: `${firstName} ${lastName}`,
    species: getSpeciesByIds(speciesId),
    locations: getLocationsByspeciesIds(speciesId),
  };
}

function getEmployeesCoverage({ ...options } = {}) {
  if (Object.keys(options).length > 0) {
    const { name, id } = options;
    const {
      id: employeeid,
      firstName,
      lastName,
      responsibleFor: speciesId,
    } = getEmployeeByAttribute(name, id);
    const coverage = createCoverage(employeeid, firstName, lastName, speciesId);
    return coverage;
  }
  const employees = getEmployees();
  return employees.map((employee) => {
    const { id: employeeid, firstName, lastName, responsibleFor: speciesId } = employee;
    return createCoverage(employeeid, firstName, lastName, speciesId);
  });
}

module.exports = getEmployeesCoverage;
