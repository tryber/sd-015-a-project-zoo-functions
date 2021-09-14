const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const jungle = {};
    species.forEach((creature) => { jungle[creature.name] = creature.residents.length; });
    return jungle;
  }
  const { specie, gender } = animal;
  const findAnimals = species.find((creature) => creature.name === specie);
  const population = findAnimals.residents.length;
  const findGender = findAnimals.residents.filter((creature) => creature.sex === gender);
  const popGender = findGender.length;

  return gender === undefined ? population : popGender;
}

module.exports = countAnimals;
