const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};
  if (animal === undefined) {
    data.species.forEach((e) => animals[e.name] = e.residents.length);
  } else if (animal.gender === undefined) {
    const animalResidentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents;
    return animalResidentsObject.length;
  } else {
    const animalResidentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents;
    return animalResidentsObject.filter((e) => e.sex === `${animal.gender}`).length;
  } return animals;
}

module.exports = countAnimals;
