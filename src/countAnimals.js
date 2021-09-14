const data = require('../data/zoo_data');

function createObject() {
  return {
    lions: data.species[0].residents.length,
    tigers: data.species[1].residents.length,
    bears: data.species[2].residents.length,
    penguins: data.species[3].residents.length,
    otters: data.species[4].residents.length,
    frogs: data.species[5].residents.length,
    snakes: data.species[6].residents.length,
    elephants: data.species[7].residents.length,
    giraffes: data.species[8].residents.length,
  };
}

function countAnimals(animal) {
  if (animal === undefined) {
    return createObject();
  }
  const { specie, sex } = animal;

  const resultAnimal = data.species.find((species) => species.name === specie);
  if (sex !== undefined) {
    return (
      resultAnimal.residents.filter((genderAnimal) => genderAnimal.sex === sex).length
    );
  }
  return resultAnimal.residents.length;
}

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
