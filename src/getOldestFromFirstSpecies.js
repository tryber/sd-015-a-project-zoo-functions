const data = require('../data/zoo_data');

function consultaAnim(id) {
  const dataName = data.species.find((animal) => animal.id === id).residents
    .reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr));
  return [dataName.name, dataName.sex, dataName.age];
}
//
function getOldestFromFirstSpecies(id) {
  const idAnimal = data.employees.find((name) => name.id === id).responsibleFor
    .find((animal) => animal);

  return consultaAnim(idAnimal);
}

module.exports = getOldestFromFirstSpecies;
