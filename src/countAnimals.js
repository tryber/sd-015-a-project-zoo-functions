const data = require('../data/zoo_data');

function xibil(animal) {
  return data.species.find((specie) => specie.name === animal.specie).residents
    .length;
}
function xibil2(animal) {
  return data.species.find(
    (specie) => specie.name === animal.specie,
  ).residents.filter((resident) => resident.sex === animal.gender).length;
}

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, specie) =>
      Object.assign(acc, { [specie.name]: specie.residents.length }), {});
  } if (animal.gender) {
    return xibil2(animal);
  }
  return xibil(animal);
}

// console.log(countAnimals({ specie: 'elephants', gender: 'male' }));
module.exports = countAnimals;
