// Ref:
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/leonardo-felix-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/tree/pedro-guarize-zoo-functions-project

const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const getEmp = employees.find((emp) => emp.id === id);
  const getAnId = getEmp.responsibleFor[0];
  const accessAn = species.find((specie) => specie.id === getAnId).residents;
  const getRes = accessAn.reduce((acc, curr) => (acc.age > curr.age ? acc : curr));
  return [getRes.name, getRes.sex, getRes.age];
}

module.exports = getOldestFromFirstSpecies;
