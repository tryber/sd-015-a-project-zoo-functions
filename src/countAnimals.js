const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    return species.reduce((objeto, elemento) =>
      Object.assign(objeto, { [elemento.name]: elemento.residents.length }), {});
  }
  const { specie, gender } = animal;
  if (!gender) {
    return species.find((zooAnimal) => zooAnimal.name === specie).residents.length;
  }
  return species.find((zooAnimal) => zooAnimal.name === specie).residents
    .filter((genreAnimal) => genreAnimal.sex === gender).length;
}

module.exports = countAnimals;
