const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  const listAnimals = { };
  if (animal === undefined) {
    const value = species.map((element) => element.residents.length);
    species.map((animals) => animals.name).forEach((element, index) => {
      listAnimals[element] = value[index];
    }); return listAnimals;
  }
  if (Object.values(animal).length === 1) {
    return species.find((element) => element.name === Object.values(animal)[0]).residents.length;
  }
  if (Object.values(animal).length === 2 && animal.gender === 'female') {
    const filtterAnimal = species.find((element) => element.name === Object.values(animal)[0]);
    const female = filtterAnimal.residents.filter((gender) => gender.sex === 'female');
    return female.length;
  }
  const filtterAnimal = species.find((element) => element.name === Object.values(animal)[0]);
  const result = filtterAnimal.residents.filter((gender) => gender.sex === 'male');
  return result.length;
}

console.log(countAnimals({ specie: 'bears', gender: 'female' }));

module.exports = countAnimals;

// { specie: 'giraffes', gender: 'female' }
