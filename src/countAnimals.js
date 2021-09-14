const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  if (!animal.gender) {
    const findAnimal = species.find((param) => param.name === animal.specie);
    const countSpecie = findAnimal.residents.length;
    return countSpecie;
  }

  const foundedAnimal = species.find((param) =>
    param.name === animal.specie);
  const genderAnimal = foundedAnimal.residents.filter((element) =>
    element.sex === animal.gender).length;
  return genderAnimal;
}
countAnimals({
  specie: 'elephants',
  gender: 'male',
});
module.exports = countAnimals;
