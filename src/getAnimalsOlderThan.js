const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  // seu código aqui
  const animalsAge = data.species.filter((bicho) => bicho.name === animal);
  // Utilizando o animalAge[0] porque o retorno do filter é um array
  const toReturn = animalsAge[0].residents.every((element) => element.age >= age);
  return toReturn;
}
module.exports = getAnimalsOlderThan;
