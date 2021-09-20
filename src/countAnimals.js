const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    species.forEach((iten) => { animals[iten.name] = iten.residents.length; });
    return animals;
  }
  const numAni = species.find((animals) => animals.name === animal.specie);
  if (animal.sex === undefined) return numAni.residents.length;
  return numAni.residents.filter((iten) => iten.sex === animal.sex).length;
}
console.log(countAnimals({ specie: 'tigers', sex: 'male' }));
module.exports = countAnimals;
