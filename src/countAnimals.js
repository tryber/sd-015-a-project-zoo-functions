const data = require('../data/zoo_data');
const animals = {};

function getAnimalsResidentsLength(e) {
  animals[e.name] = e.residents.length
}

function countAnimals(animal) {
  if (animal === undefined) {
    data.species.forEach(e => getAnimalsResidentsLength(e));
  } else if (animal.gender === undefined) {
    const residentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents;
    return residentsObject.length;
  } else {
    const residentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents;
    return residentsObject.filter((e) => e.sex === `${animal.gender}`).length;
  } return animals;
}

module.exports = countAnimals;
