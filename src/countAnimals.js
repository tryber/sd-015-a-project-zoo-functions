const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const tods = {};
  if (arguments.length === 0) {
    species.forEach((elemento) => {
      tods[`${elemento.name}`] = elemento.residents.length;
    });
    return tods;
  }
  if (Object.keys(animal).length === 1) {
    const argAnimal = species.find((elemento) => elemento.name === animal.specie);
    return argAnimal.residents.length;
  }
  const argGenderAnimal = species.find((elemento) => elemento.name === animal.specie);
  const selecGender = argGenderAnimal.residents.filter((elemento) => elemento.sex === animal.sex);
  return selecGender.length;
}

module.exports = countAnimals;

// const todosOsAnimais = species.map((elemento) => `${elemento.name} ${elemento.residents.length}`);
