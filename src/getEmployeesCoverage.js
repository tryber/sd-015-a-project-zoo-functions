const { species, employees } = require('../data/zoo_data');

function createObject(object) {
  const animals = object.responsibleFor.map((id) => species.find((each) => each.id === id).name);
  return {
    id: object.id,
    fullName: `${object.firstName} ${object.lastName}`,
    species: animals,
    locations: animals.map((animal) => species.find((place) => place.name === animal).location),
  };
}

const verify = (employee, identity) => employee.id === identity.id || employee.firstName === identity.name || employee.lastName === identity.name;

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
