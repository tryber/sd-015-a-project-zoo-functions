const data = require('../data/zoo_data');

 const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const employeeId = employees.find((aux) => aux.id === id);
  // return employeeId;
  const animal = species.find((aux) => aux.id === employeeId.responsibleFor[0]);
  // return animal;
  const oldestAnimal = animal.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr), {});
  return [oldestAnimal.name, oldestAnimal.sex, oldestAnimal.age];
}

module.exports = getOldestFromFirstSpecies;

// [nome, sexo, idade]
console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'))