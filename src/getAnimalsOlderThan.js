const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const animais = data.species.find((element) => element.name === animal).residents;
  const idadeMinima = animais.every((element) => element.age >= age);
  return idadeMinima;
}
// console.log(getAnimalsOlderThan('penguins', 10));
module.exports = getAnimalsOlderThan;
