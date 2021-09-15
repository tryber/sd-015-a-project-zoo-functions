const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  if (!id) { return 'Erro!'; }
  const firstId = employees.find((element) => element.id === id).responsibleFor[0];
  const animal = species.filter((element) => element.id === firstId);
  return Object.values(animal[0].residents.reduce((acc, cur) => (acc.age > cur.age ? acc : cur)));
}

module.exports = getOldestFromFirstSpecies;
