const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find((elm) => elm.id === id).responsibleFor[0];
  const firstSpecie = species.find((elm) => elm.id === firstSpecieId);
  const oldestSpecie = firstSpecie.residents.reduce((acc, cur) => (cur.age > acc.age ? cur : acc));
  return Object.values(oldestSpecie);
}

module.exports = getOldestFromFirstSpecies;
