const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animals = {};
    data.species.forEach((specieName) => {
      animals[specieName.name] = specieName.residents.length;
    });
    return animals;
  }
  const { specie, gender } = animal;
  if (!gender) {
    return data.species.find((specieName) => specieName
      .name === specie).residents.length;
  }
  return data.species.find((specieName) => specieName.name
  === specie).residents.filter((specieSex) => specieSex.sex === gender).length;
}

module.exports = countAnimals;
