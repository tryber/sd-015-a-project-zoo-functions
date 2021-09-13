const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  // usar o every
  const animals = data.species.find((species) => {
    return species.name === animal;
  });

  return animals.residents.every((species) => {
    return species.age > age;
  });
}
console.log(getAnimalsOlderThan('otters', 7));
console.log(getAnimalsOlderThan('lions', 5));
module.exports = getAnimalsOlderThan;
