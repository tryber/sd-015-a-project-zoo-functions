const data = require('../data/zoo_data');
const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const managerName = employees.find((elemento) => elemento.id === id);
  const animalName = managerName.responsibleFor.find((elemento) => elemento[0]);
  const objectAnimal = species.find((elemento) => elemento.id === animalName);
  const arrayObject = objectAnimal.residents;
  const ageOrder = arrayObject.sort((a, b) => b.age - a.age);

  return Object.values(ageOrder[0]);
}

module.exports = getOldestFromFirstSpecies;
