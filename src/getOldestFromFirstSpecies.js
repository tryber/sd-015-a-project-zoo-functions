const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employe = employees.find((element) => element.id === id);
  const animalId = employe.responsibleFor[0];
  const specie = species.find((element) => element.id === animalId);
  const oldAnimal = specie.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  const values = Object.values(oldAnimal);
  return [...values];
}

getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1');
module.exports = getOldestFromFirstSpecies;
