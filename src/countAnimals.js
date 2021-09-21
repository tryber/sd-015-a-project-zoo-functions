const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((objeto, elemento) =>
      Object.assign(objeto, { [elemento.name]: elemento.residents.length }), {});
  }

  const { specie, sex } = animal;
  if (!sex) {
    return species.find((anim) => anim.name === specie).residents.length;
  }
  return species.find((anim) => anim.name === specie).residents.filter((genderS) =>
    genderS.sex === sex).length;
}

module.exports = countAnimals;
