const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const idEmployee = employees.find((elemente) => elemente.id === id);
  // tenho o funcionário.
  return species.find((animal) =>
    animal.id === idEmployee.responsibleFor[0]).residents.reduce((arrayRet, infos) =>
    ((arrayRet[2] > infos.age) ? arrayRet : [infos.name, infos.sex, infos.age]), [0, 0, 0]);
  // preciso que arrayRet tenha o [2] para me referenciar ao último elemento do array que estou criando.
}
module.exports = getOldestFromFirstSpecies;
