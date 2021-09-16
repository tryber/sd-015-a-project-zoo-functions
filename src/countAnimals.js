const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    species.forEach((iten) => { animals[iten.name] = iten.residents.length; });
    return animals;
  }
  const numAni = species.find((animals) => animals.name === animal.specie);
  if (animal.gender === undefined) return numAni.residents.length;
  return numAni.residents.filter((iten) => iten.sex === animal.gender).length;
}
console.log(countAnimals({ specie: 'tigers', gender: 'male' }));
module.exports = countAnimals;
