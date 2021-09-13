const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const allAnimals = {};
  if (animal === undefined) {
    species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });
    return allAnimals;
  }
  const { specie, gender } = animal;
  const animals = species.find((value) => value.name === specie).residents;
  const animalsResident = animals.reduce((acc, crr) => (crr.sex === gender ? acc + 1 : acc), 0);
  return (gender === undefined) ? animals.length : animalsResident;
}
module.exports = countAnimals;
