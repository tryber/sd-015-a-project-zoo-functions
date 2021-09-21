const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const final = [];
  const worker = employees.find((obj) => obj.id === id).responsibleFor.map((value) => value)[0];
  const animalObj = species.find((animal) => animal.id === worker).residents;
  const result = animalObj.reduce((acc, element) => ((element.age > acc.age) ? element : acc));
  final.push(result.name, result.sex, result.age);
  return final;
}

module.exports = getOldestFromFirstSpecies;
