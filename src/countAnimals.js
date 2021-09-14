const data = require('../data/zoo_data');

function findSpecie(animalSpecie) {
  return data.species.find((elem) => elem.name === animalSpecie).residents;
}

function splitGender(animalSpecie, animalSex) {
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
  const { specie, gender } = animal;
  const getSpecie = findSpecie(specie);
  if (!gender) {
    return getSpecie.length;
  }
  return splitGender(getSpecie, gender).length;
}

module.exports = countAnimals;
