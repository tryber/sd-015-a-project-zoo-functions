const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const namedAnimal = data.species.filter((specie) => specie.name === animal);
  return namedAnimal[0].residents.reduce((acc, res) => {
    if (age > res.age) return false;
    return true;
  });
}

module.exports = getAnimalsOlderThan;
