const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const caredSpecies = data.employees.find((person) => person.id === id).responsibleFor[0]; // Quero encontrar a primeira especie cuidada para funcionário passado pelo ID;
  const animals = data.species.find((animal) => animal.id === caredSpecies).residents;
  const older = animals.reduce((acc, curr) => ((acc.age > curr.age ? acc : curr)));
  // console.log(older);
  return Object.values(older);
}
getOldestFromFirstSpecies('9e7d4524-363c-416a-8759-8aa7e50c0992');

module.exports = getOldestFromFirstSpecies;
