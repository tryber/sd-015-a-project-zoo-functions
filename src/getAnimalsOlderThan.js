const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
    const findTheAnimal = data.species.find((correct) => correct.name === animal);
    const ageCorrect = findTheAnimal.residents.every((allAnimals) => allAnimals.age >= age);
    return ageCorrect;
  }


module.exports = getAnimalsOlderThan;
