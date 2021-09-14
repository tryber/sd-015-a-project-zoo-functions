const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const list = species.reduce((acc, crr) => {
      acc[crr.name] = crr.residents.length 
      return acc}, {}); 
  return list;
  } 
  //const {species, gender} = animal;
}
console.log(countAnimals());
module.exports = countAnimals;
