const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const person = data.employees.find((element) => element.id === id);
  const responsibleAnimal = person.responsibleFor[0];
  const animal = data.species.find((specie) => specie.id === responsibleAnimal);
  const age = animal.residents.sort((a, b) => b.age - a.age)[0];
  return [age.name, age.sex, age.age];
}

console.log(getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992'));

module.exports = getOldestFromFirstSpecies;
