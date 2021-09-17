const data = require('../data/zoo_data');

const maxAge = (animal) => {
  let maAge = 0;
  let animalSelected = {};
  const retorno = [];
  animal.filter((animals) => {
    if (animals.age > maAge) {
      maAge = animals.age;
      animalSelected = animals;
    }
    return animalSelected;
  });
  retorno.push(animalSelected.name);
  retorno.push(animalSelected.sex);
  retorno.push(animalSelected.age);
  return retorno;
};
const getSpecie = (id) => {
  const animal = data.species.find((search) => search.id === id);
  return maxAge(animal.residents);
};
const getOldestFromFirstSpecies = (id) => {
  const employe = data.employees.find((search) => search.id === id);
  return getSpecie(employe.responsibleFor[0]);
};

module.exports = getOldestFromFirstSpecies;
