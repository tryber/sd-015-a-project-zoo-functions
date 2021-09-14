const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objectOfAnimals = {};
    const allAnimals = () => species.forEach((animals) => {
      const newKey = ({ [animals.name]: animals.residents.length });
      Object.assign(objectOfAnimals, newKey);
    });
    allAnimals();
    return objectOfAnimals;
  } if (Object.keys(animal).length > 1) {
    const animalTarget = species.find((target) => target.name === animal.specie);
    return animalTarget.residents.filter((target) => animal.gender === target.sex).length;
  }
  const animalTarget = species.find((target) => target.name === animal.specie);
  return animalTarget.residents.length;
}

module.exports = countAnimals;
