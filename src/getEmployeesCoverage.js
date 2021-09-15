const data = require('../data/zoo_data');

function getEmployeeObj(person) {
  return data.employees
    .find((employee) => employee.firstName === person
     || employee.lastName === person || employee.id === person);
}

function getAnimalName(id) {
  return data.species.find((especie) => especie.id === id).name;
}

function getAnimalRegion(...animal) {
  return animal.map((animalId) => (data.species.find((specie) => specie.id === animalId)).location);
}

function getEmployeeCoverage(id) {
  const employeeInfo = getEmployeeObj(id);
  return !employeeInfo
    ? undefined
    : {
      id: employeeInfo.id,
      fullName: `${employeeInfo.firstName} ${employeeInfo.lastName}`,
      species: employeeInfo.responsibleFor.map((animal) => getAnimalName(animal)),
      locations: getAnimalRegion(...employeeInfo.responsibleFor),
    };
}

function getEmployeesCoverage(id) {
  if (id === undefined) {
    return data.employees.map((employee) => getEmployeeCoverage(employee.id));
  }
  const coverageInfo = getEmployeeCoverage(id[Object.keys(id)[0]]);
  if (coverageInfo === undefined) {
    throw new Error('Informações inválidas');
  }
  return coverageInfo;
}
module.exports = getEmployeesCoverage;
