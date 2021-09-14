const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const objectReturn = {};
    data.species.forEach((element) => {
      objectReturn[element.name] = element.residents.length;
    });
    return objectReturn;
  }
  if (Object.keys(animal).length === 1) {
    return data.species.find((species) => species.name === animal.specie).residents.length;
  }
  const sortByGender = data.species.find((species) => species.name === animal.specie);
  return sortByGender.residents.filter((residents) => residents.sex === animal.gender).length;
}

// console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
