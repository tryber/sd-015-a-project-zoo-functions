const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const responsavel = employees.find((element) => element.id === id);
  const animal = species.find((element) => element.id === responsavel.responsibleFor[0]).residents
    .reduce((acc, elemento) => (acc.age > elemento.age ? acc : elemento), 0);
  return [animal.name, animal.sex, animal.age];
}

module.exports = getOldestFromFirstSpecies;
