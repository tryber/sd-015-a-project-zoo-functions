const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animals = {};
  if (animal === undefined) {
    data.species.forEach(function generateResult(e) { animals[e.name] = e.residents.length });
  } else if (animal.gender === undefined) {
    const residentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents;
    return residentsObject.length;
  } else {
    const residentsObject = data.species.filter((e) => animal.specie.includes(e.name))[0].residents;
    return residentsObject.filter((e) => e.sex === `${animal.gender}`).length;
  } return animals;
}

module.exports = countAnimals;
