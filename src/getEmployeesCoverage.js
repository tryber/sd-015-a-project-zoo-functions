const { species, employees } = require('../data/zoo_data');

const getEmployee = (opts) => {
  if (opts.name) {
    return employees.find((obj) => (obj.firstName === opts.name || obj.lastName === opts.name));
  }
  if (opts.id) {
    return employees.find((obj) => obj.id === opts.id);
  }
};

const getSpeciesList = (idList) => {
  const filteredSpecies = species.filter((specie) => idList.includes(specie.id));
  const nameList = filteredSpecies.map((animal) => animal.name);
  return nameList;
};

const getLocationsList = (idList) => {
  const filteredSpecies = species.filter((specie) => idList.includes(specie.id));
  const locationList = filteredSpecies.map((animal) => animal.location);
  return locationList;
};

const makeOutput = (employeeObj) => ({
  id: employeeObj.id,
  fullName: `${employeeObj.firstName} ${employeeObj.lastName}`,
  species: getSpeciesList(employeeObj.responsibleFor),
  locations: getLocationsList(employeeObj.responsibleFor),
});

function getEmployeesCoverage(employee) {
  if (!employee) {
    return employees.map((person) => makeOutput(person));
  }
  const employeeObj = getEmployee(employee);
  if (!employeeObj) throw new Error('Informações inválidas');
  return makeOutput(employeeObj);
}

module.exports = getEmployeesCoverage;
