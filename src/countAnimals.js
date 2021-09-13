const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    const animais = {};
    data.species.forEach((element) => { animais[element.name] = element.residents.length; });
    return animais;
  }
  const especie = data.species.find((anim) => anim.name === animal.specie);
  if (animal.specie && animal.gender) {
    const especieGenero = especie.residents.filter((anim) => anim.sex === animal.gender);
    return especieGenero.length;
  }
  return especie.residents.length;
}

module.exports = countAnimals;
