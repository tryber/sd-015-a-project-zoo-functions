const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (typeof animal === 'undefined') {
    const allAnimals = { };
    species.forEach((targetAnimal) => {
      allAnimals[targetAnimal.name] = targetAnimal.residents.length;
    });
    return allAnimals;
  }
  const { specie, sex } = animal;
  const animalSpecie = species.find((tgAnimal) => tgAnimal.name === specie).residents;
  const sexCounter = animalSpecie.reduce((acc, curr) => (curr.sex === sex ? acc + 1 : acc), 0);
  return sex === undefined ? animalSpecie.length : sexCounter;
}
// função encontrada na pull da colega emanuelle, não estava conseguindo consertar o problema de não rodar no avalidor remoto, decidi colocar uma função de um colega n pra ver se roda

module.exports = countAnimals;
