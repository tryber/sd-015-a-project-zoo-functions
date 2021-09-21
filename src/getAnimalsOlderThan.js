// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const verIdade = data.species.find((seraki) => seraki.name === animal)
    .residents.every((objAnimal) => objAnimal.age >= age);
  return verIdade;
  // seu código aqui
}
console.log(getAnimalsOlderThan('otters', 7));
module.exports = getAnimalsOlderThan;
