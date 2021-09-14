const data = require('../data/zoo_data');

// Estruturando o objeto com os dados necessários para a conclusão do exercício:
const eachZooAnimalBySpecie = {};
data.species.forEach((specie) => { eachZooAnimalBySpecie[specie.name] = specie.residents; });
// eachZooAnimalBySpecie = { lions: [{name: 'Zena', sex: 'female', age: 12 }...], tigers: [{name: 'Shu', sex: 'female', age: 19 }...], ... }

function numberOfAnimalsBySpecie() { // Callback que retorna um objeto que engloba a quantidade de animais, por espécie.
  const numOfAnimalsBySpecie = {};

  Object.keys(eachZooAnimalBySpecie).forEach((specie, index) => {
    numOfAnimalsBySpecie[specie] = Object.values(eachZooAnimalBySpecie)[index].length;
  });

  return numOfAnimalsBySpecie; // Retorna { lions: 4, tigers: 2, bears: 3, penguins: 4, ... }.
}

function countAnimals(animal) {
  let counter = 0;

  if (animal === undefined) {
    return numberOfAnimalsBySpecie();
  } if (Object.keys(animal).length === 1) {
    return numberOfAnimalsBySpecie()[animal.specie];
  }
  eachZooAnimalBySpecie[animal.specie].forEach((animalObj) => {
    if (animalObj.sex === animal.gender) {
      counter += 1;
    }
  });
  return counter;
}

module.exports = countAnimals;
