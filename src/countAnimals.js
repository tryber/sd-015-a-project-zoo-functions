const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const objectReturn = {};
    data.species.forEach((element) => {
      objectReturn[element.name] = element.residents.length;
    });
    return objectReturn;
  }
  const { specie, gender } = animal;
  if (!gender) {
    return data.species.find((elemento) =>
      elemento.name === specie).residents.length;
  }
  return data.species.find((elemento2) =>
    elemento2.name === specie).residents.filter((elemento3) =>
    elemento3.sex === gender).length;
}
console.log(countAnimals({ specie: 'elephants', gender: 'male' }));

module.exports = countAnimals;
