const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getOldestFromFirstSpecies = (id) => {
  const responsible = employees.find((x) => x.id === id);
  const animal = species.find((y) => y.id === responsible.responsibleFor[0]).residents
    .reduce((acc, curr) => (acc.age > curr.age ? acc : curr));

  return [animal.name, animal.sex, animal.age];
};

module.exports = getOldestFromFirstSpecies;
