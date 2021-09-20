const data = require('../data/zoo_data');

// youtube - mentoria sabado e git

function countAnimals(animal) {
  const object = {};
  if (animal === undefined) {
    data.species.forEach((element) => { object[element.name] = element.residents.length; });
    return object;
  }

  const kindQuantity = data.species.find((element) => element.name === animal.specie).residents;

  if (animal.specie && animal.sex) {
    return kindQuantity.filter((element) => element.sex === animal.sex).length;
  }

  return kindQuantity.length;
}

module.exports = countAnimals;
