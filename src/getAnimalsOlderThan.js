const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const filteredSpecie = data.species.filter(
    (specie) => specie.name === animal
  );
  let animals = filteredSpecie.map((zooAnimal) => zooAnimal.residents);
  [animals] = animals;
  return animals.every((finalAnimal) => finalAnimal.age > age);
}

module.exports = getAnimalsOlderThan;
