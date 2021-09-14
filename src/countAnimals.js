const data = require('../data/zoo_data');

const countAnimals = (animal) => {
  if (animal === undefined) {
    const animals = {};
    data.species.forEach((element) => {
      animals[element.name] = element.residents.length;
    });
    return animals;
  } if (Object.keys(animal).length === 1) {
    return data.species.find((elemento) => elemento.name === animal.specie).popularity;
  } if (Object.keys(animal).length === 2) {
    const animal2 = data.species.find((elemento) => elemento.name === animal.specie);
    return animal2.residents.filter((elemento) => elemento.sex === animal.gender).length;
  }
};
module.exports = countAnimals;
