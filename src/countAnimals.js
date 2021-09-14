const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};

  if (!animal) {
    data.species.forEach((el) => {
      animals[el.name] = el.residents.length;
    });
    return animals;
  }

  const { specie, gender } = animal;

  const beast = data.species.find((e) => e.name === specie).residents;

  const residents = beast.reduce((acc, el) => (el.sex === gender ? acc + 1 : acc), 0);

  return gender === undefined ? beast.length : residents;
}

module.exports = countAnimals;
