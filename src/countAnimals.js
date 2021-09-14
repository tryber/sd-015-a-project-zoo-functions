const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    const animalsNames = data.species.map((animals) => animals.name);
    const animalsTotal = data.species.map((animals) => animals.residents.length);
    const namesAndTotal = {};
    for (let index = 0; index < animalsNames.length; index += 1) {
      namesAndTotal[animalsNames[index]] = animalsTotal[index];
    }
    return namesAndTotal;
  } if (animal.gender !== undefined) {
    const specieObj = data.species.filter((specie) => specie.name === animal.specie);
    const specieGenderTot = specieObj[0].residents.filter((specie) => specie.sex === animal.gender);
    return specieGenderTot.length;
  }

  const specieObject = data.species.filter((specie) => specie.name === animal.specie);
  const specieTot = specieObject[0].residents.length;
  return specieTot;
}
console.log(countAnimals());
console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'giraffes', gender: 'female' }));
module.exports = countAnimals;
