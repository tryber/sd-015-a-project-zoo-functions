const { species } = require('../data/zoo_data');

function countAnimals(animalPam) {
  const objAnimals = {};
  if (!animalPam) {
    species.forEach((anim) => { objAnimals[anim.name] = anim.residents.length; });
    // Vai percorrer o array de species a adcionar no objeto vazio o nome e a quantidade de animais.
    return objAnimals;
  }
  const { specie, gender } = animalPam;

  if (specie !== undefined && gender === undefined) {
    return species.find((anim) => anim.name === specie).residents.length;
  }
  return species.find((anim) => anim.name === specie).residents
    .filter((sex) => sex.sex === gender).length;
}
module.exports = countAnimals;
