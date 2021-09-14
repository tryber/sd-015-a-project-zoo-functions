const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function animalLocation(name) {
  const employeeSearch = employees.find((elem) => elem.firstName === name);
  const animalId = employeeSearch.responsibleFor;
  const [a, b, c, d] = animalId;
  const findAnimalName = species
    .find((elem) => elem.id === a || elem.id === b || elem.id === c || elem.id === d);

  const animalState = species.find((elem) => elem.location === findAnimalName.location);
  console.log(animalState);
  return findAnimalName.location;
}

function getEmployeesCoverage(object) {
  const person = employees.find((elem) => elem.firstName === object.name || elem.id === object.id);

  if (person === undefined) {
    throw new Error('Informações inválidas');
  }

  return {
    id: person.id,
    fullName: `${person.firstName} ${person.lastName}`,
    species: `${person.responsibleFor}`,
    locations: animalLocation(person.firstName),
  };
}

module.exports = getEmployeesCoverage;
