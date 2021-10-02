// Crie uma função que verifica se todos os animais de uma espécie possuem a idade mínima especificada
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const findTheAnimal = data.species.find((correct) => correct.name === animal);
  const ageCorrect = findTheAnimal.residents.every((allAnimals) => allAnimals.age >= age);
  return ageCorrect;
}

module.exports = getAnimalsOlderTh
