const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((bicho) => bicho.name === animal);
  return console.log(animals);
}

module.exports = getAnimalsOlderThan;
