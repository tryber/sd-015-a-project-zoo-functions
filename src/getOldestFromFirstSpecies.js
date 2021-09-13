const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(idEmp) {
  const findId = employees.find(({ id }) => id === idEmp);
  const findAnimalEmp = findId.responsibleFor[0];
  const findAnimal = species.find(({ id }) => id.includes(findAnimalEmp));
  const oldest = findAnimal.residents.sort((a, b) => b.age - a.age)[0];
  return Object.values(oldest);
  // seu código aqui
}

module.exports = getOldestFromFirstSpecies;
