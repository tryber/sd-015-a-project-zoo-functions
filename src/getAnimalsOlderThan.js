const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const algAnimal = (specie) => {
    if (specie.name === animal) {
      return specie;
    }
  };

  const selectedAnimal = data.species.find(algAnimal);

  const selectedResidents = selectedAnimal.residents;

  const algResidents = (resident) => resident.age >= age;

  const result = selectedResidents.every(algResidents);

  return result;
}

/* console.log(getAnimalsOlderThan('lions', 18)); */

module.exports = getAnimalsOlderThan;
