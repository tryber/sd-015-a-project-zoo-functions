const { species, employees } = require('../data/zoo_data');

function createObject(object) {
  const animals = object.responsibleFor.map((id) => species.find((a) => a.id === id).name);
  return {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: animals,
    locations: animals.map((animal) => species.find((place) => place.name === animal).location),
  };
}

function verify(e, idName) {
  return e.id === idName.id || e.firstName === idName.name || e.lastName === idName.name;
}

function getEmployeesCoverage(entry) {
  let coverage = {};
  if (entry === undefined) {
    coverage = employees.map((element) => createObject(element));
  } else {
    const employee = employees.find((eachEmployee) => verify(eachEmployee, entry));
    if (employee !== undefined) {
      coverage = createObject(employee);
    } else {
      throw new Error('Informações inválidas');
    }
  }
  return coverage;
}

module.exports = getEmployeesCoverage;
