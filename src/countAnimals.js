const data = require('../data/zoo_data');

function countAnimals(animal) {
  // const listAnimals = { };
  if (animal === undefined) {
    const value = data.species.map((element) => element.residents.length);
    return value;
  }
  if (Object.values(animal).length === 1) {
    const obj = Object.values(animal);
    const filtterAnimal = data.species.find((element) => element.name === obj[0]);
    const result = filtterAnimal.residents.length;
    return result;
  }
  const obj = Object.values(animal);
  const filtterAnimal = data.species.find((element) => element.name === obj[0]);
  return filtterAnimal.residents.filter((gender) => gender.sex === 'female');
}

console.log(countAnimals());

module.exports = countAnimals;

// { specie: 'giraffes', gender: 'female' }
