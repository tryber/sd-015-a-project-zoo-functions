const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  // ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Working_with_Objects
  const totalOfAnimals = {};
  if (animal === undefined) {
    data.species.forEach((type) => { totalOfAnimals[type.name] = type.residents.length; });
    return totalOfAnimals;
  }
  const { specie, gender } = animal;
  const animalSpecie = data.species.find((name) => name.name === specie);
  const genderAnimal = animalSpecie.residents.filter((kind) => kind.sex === gender);
  if (specie && gender) {
    return genderAnimal.length;
  }
  return animalSpecie.residents.length;
}

module.exports = countAnimals;
