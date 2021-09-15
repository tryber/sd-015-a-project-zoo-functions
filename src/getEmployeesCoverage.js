const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getLocationsOfAnimals(animals) {
  const speciesLocalization = species.map((specie) => [specie.location, specie.name]);
  return animals.map((animal) => speciesLocalization.reduce((acc, curr) => {
    if (animal === curr[1]) {
      return acc.concat(curr[0]);
    }
    return acc;
  }, ''));
}

function getAnimalsByIds(ids) {
  const animalsId = species.map((animal) => [animal.name, animal.id]);
  return ids.map((id) => animalsId.reduce((acc, curr) => {
    if (id === curr[1]) {
      return acc.concat(curr[0]);
    }
    return acc;
  }, ''));
}

function defaultResult() {
  return employees.reduce((acc, worker) => {
    const { id, firstName, lastName, responsibleFor } = worker;
    return acc.concat({
      id,
      fullName: `${firstName} ${lastName}`,
      species: getAnimalsByIds(responsibleFor),
      locations: getLocationsOfAnimals(getAnimalsByIds(responsibleFor)),
    });
  }, []);
}

function getEmployeesCoverage(employeeObj) {
  if (employeeObj === undefined) return defaultResult();
  const toArray = Object.values(employeeObj)[0];
  const dataSingleEmployee = defaultResult().filter((worker) => {
    const partsOfName = worker.fullName.split(' ');
    return toArray === partsOfName[0]
    || toArray === partsOfName[1]
    || toArray === worker.id;
  });
  if (dataSingleEmployee.length < 1) {
    throw new Error('Informações inválidas');
  }
  return dataSingleEmployee[0];
}

module.exports = getEmployeesCoverage;
