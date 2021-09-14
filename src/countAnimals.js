const data = require('../data/zoo_data');
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/fromEntries
function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    const allAnimals = Object.fromEntries(species.map((e) => [e.name, e.residents.length]));
    return allAnimals;
  }
  const { specie: name, gender } = animal;
  if (name && !gender) {
    const num = species.find((e) => e.name === name);
    return num.residents.length;
  }
  const animalWithGender = species.find((e) => e.name === name)
    .residents.filter((e) => e.sex === gender).length;
  return animalWithGender;
}
// a
module.exports = countAnimals;
