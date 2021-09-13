const data = require('../data/zoo_data');

const nullParam = () => {
  const allAnimals = {};
  data.species.forEach((element) => { (allAnimals[element.name] = element.residents.length); });
  return allAnimals;
};

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) return nullParam();
  const animSpecie = data.species.find((element) => element.name === animal.specie);
  if (animal.gender === undefined) return animSpecie.residents.length;
  const animGender = animSpecie.residents.filter((element) => element.sex === animal.gender);
  return animGender.length;
}

module.exports = countAnimals;
