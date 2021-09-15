const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const dataPath = data.species;
  const result = dataPath.find((specie) =>
    specie.name === animal).residents;
  const result2 = result.every((animalAge) =>
    animalAge.age >= age);
  return result2;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
