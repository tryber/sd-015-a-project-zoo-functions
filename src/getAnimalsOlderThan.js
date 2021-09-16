const {
  species,
} = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // Procura o objeto com o nome igual à animal e retorna os residentes
  return species.find((elem) => elem.name === animal).residents
  // Checa se todos residentes são mais velhos que a idade passada no parametro
    .every((yearsOld) => yearsOld.age >= age);
}

module.exports = getAnimalsOlderThan;
