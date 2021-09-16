const data = require('../data/zoo_data');

const { employees, species } = data;

function findAnimal(arrayIdAnimals) {
  const animalsName = [];
  const animalsLocation = [];

  for (let index = 0; index < arrayIdAnimals.length; index += 1) {
    animalsName.push(species.find(
      (animal) => animal.id === arrayIdAnimals[index],
    ).name);

    animalsLocation.push(species.find(
      (animal) => animal.id === arrayIdAnimals[index],
    ).location);
  }
  return [animalsName, animalsLocation];
}

function getPersonByName(personName) {
  const personObject = employees.find(
    (person) => `${person.firstName} ${person.lastName}`.includes(personName),
  );

  if (personObject === undefined) throw new Error('Informações inválidas');

  const [animalsName, animalsLocation] = findAnimal(personObject.responsibleFor);

  return {
    id: personObject.id,
    fullName: `${personObject.firstName} ${personObject.lastName}`,
    species: animalsName,
    locations: animalsLocation,
  };
}

function getPersonById(id) {
  const personObject = employees.find(
    (person) => person.id === id,
  );

  if (personObject === undefined) throw new Error('Informações inválidas');

  const [animalsName, animalsLocation] = findAnimal(personObject.responsibleFor);

  return {
    id: personObject.id,
    fullName: `${personObject.firstName} ${personObject.lastName}`,
    species: animalsName,
    locations: animalsLocation,
  };
}

function ifNoParams() {
  const finalResult = employees.map((person) => getPersonByName(person.firstName));

  return finalResult;
}

function getEmployeesCoverage(person) {
  if (person === undefined) return ifNoParams();

  const { name, id } = person;

  if (name !== undefined) return getPersonByName(name);

  if (id !== undefined) return getPersonById(id);
}

module.exports = getEmployeesCoverage;
