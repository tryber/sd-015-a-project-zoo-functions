const data = require('../data/zoo_data');

const dim = (id) => {
  const a = data.employees.find((element) => element.id === id);
  return data.species.find((element) => element.id === a.responsibleFor[0]);
};
function getOldestFromFirstSpecies(id) {
  const a = dim(id);
  const b = a.residents.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return [b.name, b.sex, b.age];
}

module.exports = getOldestFromFirstSpecies;
