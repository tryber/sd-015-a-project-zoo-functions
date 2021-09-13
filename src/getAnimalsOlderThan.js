const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data'); 

function getAnimalsOlderThan(animal, age) {
  const ZooAnimals = species.find((tipos) => tipos.name === animal);
  return ZooAnimals.residents.every((idade) => idade.age >= age);
}

module.exports = getAnimalsOlderThan;
