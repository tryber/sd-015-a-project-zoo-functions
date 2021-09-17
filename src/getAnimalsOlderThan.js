const data = require('../data/zoo_data');

// Primeiro busquei os residentes que tem o mesmo nome passado como parametro da função
// depois busquei todos o elementos que atendiam a restrição de idade passado como parametro da função

function getAnimalsOlderThan(animal, age) {
  const { residents } = data.species.find((specie) => specie.name === animal);
  // console.log(findAnimals);
  const requiredAnimals = residents.every((subject) => subject.age > age);
  return requiredAnimals;
}

getAnimalsOlderThan('bears', 4);

module.exports = getAnimalsOlderThan;
