const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const namedAnimal = data.species.filter((specie) => specie.name === animal);
  let returnable = true;
  namedAnimal[0].residents.forEach((resident) => {
    if (age > resident.age) returnable = false;
  });
  return returnable;
}

console.log(getAnimalsOlderThan('lions', 1000));

module.exports = getAnimalsOlderThan;
