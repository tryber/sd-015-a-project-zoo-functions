const data = require('../data/zoo_data');

function findLocationsOfAnimals(array) {
  const locations = [];
  for (let i = 0; i < array.length; i += 1) {
    const getAnimal = data.species.find((specie) => specie.id === array[i]);
    locations.push(getAnimal.location);
  }
  return locations;
}

function transformIdIntoStrings(array) {
  const arrayStringAnimals = [];
  for (let i = 0; i < array.length; i += 1) {
    const nameOfAnimal = data.species.find((animal) => animal.id === array[i]);
    const stringAnimal = nameOfAnimal.name;
    arrayStringAnimals.push(stringAnimal);
  }
  return arrayStringAnimals;
}

function getCoverageWithoutParam() {
  const arrayObject = [];
  for (let i = 0; i < data.employees.length; i += 1) {
    arrayObject.push({
      id: data.employees[i].id,
      fullName: `${data.employees[i].firstName} ${data.employees[i].lastName}`,
      species: transformIdIntoStrings(data.employees[i].responsibleFor),
      locations: findLocationsOfAnimals(data.employees[i].responsibleFor),
    });
  }
  return arrayObject;
}

function getCoverageByName(name) {
  const getEmployee = data.employees.find((fullname) => fullname.firstName === name
  || fullname.lastName === name);
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas');
  }

  const employeeCoverage = {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: transformIdIntoStrings(getEmployee.responsibleFor),
    locations: findLocationsOfAnimals(getEmployee.responsibleFor),
  };
  return employeeCoverage;
}

function getCoverageById(idCoverage) {
  const getEmployee = data.employees.find((id) => id.id === idCoverage);
  if (getEmployee === undefined) {
    throw new Error('Informações inválidas');
  }

  const employeeCoverage = {
    id: getEmployee.id,
    fullName: `${getEmployee.firstName} ${getEmployee.lastName}`,
    species: transformIdIntoStrings(getEmployee.responsibleFor),
    locations: findLocationsOfAnimals(getEmployee.responsibleFor),
  };
  return employeeCoverage;
}

function getEmployeesCoverage(employeesCoverage) {
  if (employeesCoverage === undefined) {
    return getCoverageWithoutParam();
  }
  if (employeesCoverage.name !== undefined) {
    return getCoverageByName(employeesCoverage.name);
  }
  return getCoverageById(employeesCoverage.id);
}

module.exports = getEmployeesCoverage;
