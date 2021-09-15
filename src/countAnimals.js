const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    data.species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }

  let animalFind = data.species.find(x => x.name === animal.specie);

  console.log(animalFind)
  if (!animal.gender) {
    return animalFind.residents.length
  }

  let animalCount = animalFind.residents.filter(x => x.sex === animal.gender)
  return animalCount.length;
}

console.log(countAnimals({ specie: 'penguins'}));
module.exports = countAnimals;
