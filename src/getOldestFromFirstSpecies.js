const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  // seu código aqui
  const findEmployee = employees.find((elementId) =>
    elementId.id === id).responsibleFor[0];

  const findAnimals = species.find((elementAnimals) =>
    findEmployee.includes(elementAnimals.id)).residents;

  const oldAnimal = findAnimals.reduce((acc, curr) => ((acc.age > curr.age) ? acc : curr), 0); // Essa compração usando o reduce foi tirada a logica do site :https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects?rq=1 resposta do  juliangonzalez.
  return Object.values(oldAnimal);
}
module.exports = getOldestFromFirstSpecies;
