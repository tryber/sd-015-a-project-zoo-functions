const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
  const totalOfAnimals = {};
  if (animal === undefined) {
    data.species.forEach((type) => { totalOfAnimals[type.name] = type.residents.length; });
    return totalOfAnimals;
  }
  const { specie, sex } = animal;
  const animalSpecie = data.species.find((name) => name.name === specie);
  // console.log(animalSpecie);
  const genderAnimal = animalSpecie.residents.filter((kind) => kind.sex === sex);
  // console.log(genderAnimal);
  if (specie && sex) {
    return genderAnimal.length;
  }
  return animalSpecie.residents.length;
}

module.exports = countAnimals;
