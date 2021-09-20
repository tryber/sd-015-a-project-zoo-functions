const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const obj = {};
    data.species.forEach((element) => {
      obj[element.name] = element.residents.length;
    });
    return obj;
  }

  const animalFind = data.species.find((x) => x.name === animal.specie);
  if (!animal.sex) {
    return animalFind.residents.length;
  }

  const animalCount = animalFind.residents.filter((y) => y.sex === animal.sex);
  return animalCount.length;
}

module.exports = countAnimals;
