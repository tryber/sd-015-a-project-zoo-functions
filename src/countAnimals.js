const data = require('../data/zoo_data');

function findSpecie(animalSpecie) {
  return data.species.find((elem) => elem.name === animalSpecie).residents;
}

function splitSex(animalSpecie, animalSex) {
  return animalSpecie.filter((elem) => elem.sex === animalSex);
}

const animalList = {};

function teste(elem) {
  animalList[elem.name] = elem.residents.length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    data.species.forEach((elem) => teste(elem));
    return animalList;
  }
  const { specie, sex } = animal;
  console.log(specie);
  console.log(sex);
  const getSpecie = findSpecie(specie);
  if (!sex) {
    return getSpecie.length;
  }
  return splitSex(getSpecie, sex).length;
}

module.exports = countAnimals;
