const data = require('../data/zoo_data');

const { species } = data;

function emptyObject() {
  const newObject = {};
  species.forEach((element) => { newObject[element.name] = element.residents.length; });
  return newObject;
}
function countAnimals(animal) {
  if (!animal) {
    return emptyObject();
  }
  if (!(animal.gender)) {
    return species.find((element) => element.name.includes(animal.specie)).residents.length;
  }

  const filterGender = species.find((element) => element.name.includes(animal.specie));
  return filterGender.residents.filter((element) => element.sex === animal.gender).length;
}
console.log(countAnimals({ specie: 'elephants', gender: 'male' }));

module.exports = countAnimals;
