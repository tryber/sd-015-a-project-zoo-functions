const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animals = data.species.find((bicho) => bicho.name === animal);
  const resultado = animals.residents.every((criatura) => criatura.age >= age);
  return resultado;
}

module.exports = getAnimalsOlderThan;
