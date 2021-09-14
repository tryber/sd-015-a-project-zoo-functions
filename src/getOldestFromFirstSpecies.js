const { species, employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const animal = employees.find((element) => element.id === id).responsibleFor[0];
  const spe = species.find((specie) => specie.id === animal).residents;
  const array = spe.map((element) => element.age);
  const numberBig = array.reduce((acc, value) => Math.max(acc, value));
  const teste = spe.find((element) => element.age === numberBig);
  const oloko = [];
  oloko.push(teste.name, teste.sex, teste.age);
  return oloko;
}

console.log(getOldestFromFirstSpecies('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = getOldestFromFirstSpecies;
