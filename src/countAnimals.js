const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const objectToReturn = {};
    species.forEach((element) => {
      const animalName = element.name;
      const numberAnimals = element.residents.length;
      objectToReturn[`${animalName}`] = numberAnimals;
    });
    return objectToReturn;
  }
  const { specie, sex } = animal;
  const findAnimal = species.find((element) => element.name === specie);
  if (sex) {
    return findAnimal.residents.filter((element) => element.sex === sex).length;
  } 
  return findAnimal.residents.length;
}
 /* console.log(countAnimals({ specie: 'bears', sex: 'female' }));  */
module.exports = countAnimals;
