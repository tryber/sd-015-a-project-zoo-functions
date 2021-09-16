const data = require('../data/zoo_data');

const { employees, species } = require('../data/zoo_data');

// function getEmployeesCoverage() {
//   // seu código aqui
// }

const outputArray = employees.reduce((acc, curr) => {
  acc.push({
    id: curr.id,
    fullName: `${curr.firstName} ${curr.lastName}`,
    species: species.filter((specie) =>
      curr.responsibleFor.includes(specie.id)).map((animalName) => animalName.name),
    locations: species.filter((specie) =>
      curr.responsibleFor.includes(specie.id)).map((animalLocal) => animalLocal.location),
  });
  return acc;
}, []);

function getEmployeesCoverage(itensObj) {
  if (itensObj === undefined) return outputArray;

  const { name, id } = itensObj;

  if (outputArray.some((person) => person.id === id)) {
    return outputArray.find((person) =>
      person.id === id);
  }
  if (outputArray.some((person) => person.fullName.includes(name))) {
    return outputArray.find((person) =>
      person.fullName.includes(name));
  }
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
