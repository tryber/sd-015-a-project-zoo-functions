const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    species.forEach((iten) => { animals[iten.name] = iten.residents.length; });
    return animals;
  } 
   if (animal.gender === undefined) {
    const numAni = species.find((animals) => animals.name === animal.specie);
    return numAni.residents.length;
  } 
   else {
    const numAni = species.find((animals) => animals.name === animal.specie)
    return numAni.residents.filter((iten) => iten.sex === animal.gender).length;
  } 
}
console.log(countAnimals());
module.exports = countAnimals;

