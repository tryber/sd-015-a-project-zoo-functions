const data = require('../data/zoo_data');

function Attribute(animals, attributes, strings) {
  return animals[attributes].search(strings) === 0;
}

function countSex(animals, gender) {
  let animalResidents = animals.residents;
  if (gender) {
    animalResidents = animalResidents.filter((resident) => (
    Attribute(resident, 'sex', gender)
    ));
  }
  return animalResidents.length;
}

function countAnimals({ species, gender } = { species: undefined, gender: undefined }) {
  let animals = data.species;
  if (species) {
    animals = data.species.filter((animalSpecie) => (
    Attribute(animalSpecie, 'name', species)
    ));
    return countSex(animals[0], gender);
  }
  const result = {};
  animals.forEach((animal) => {
    result[animal.name] = countSex(animal, gender);
  });
  return result;
}
//requisito 5.2
module.exports = countAnimals;
