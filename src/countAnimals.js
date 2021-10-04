const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    data.species.forEach((specieName) => {
      animals[specieName.name] = specieName.residents.length;
    });
    return animals;
  }
  const { specie, sex } = animal;
  if (sex === undefined) {
    return data.species.find((specieName) => specieName
      .name === specie).residents.length;
  }
  return data.species.find((specieName2) => specieName2.name
  === specie).residents.filter((specieSex) => specieSex.sex === sex).length;
}

module.exports = countAnimals;
