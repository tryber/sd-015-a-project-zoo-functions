const data = require('../data/zoo_data');

const findAnimal = (animalSpecie) => 
data.species.find((chosenAnimal) => 
chosenAnimal.name === animalSpecie);

const getAnimalGender = (animal) => 
findAnimal(animal.specie).residents.filter((getGender) => 
getGender.sex === animal.gender).length;

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((animals, cur) => Object.assign(animals, { [cur.name]: cur.residents.length }), {});
  }
  if (animal.specie && !animal.gender) {
    return findAnimal(animal.specie).residents.length;
  }
  else if (animal.gender) {
    return getAnimalGender(animal);
  }
}
console.log(countAnimals({ specie: 'penguins', gender: 'female' }));
module.exports = countAnimals;
