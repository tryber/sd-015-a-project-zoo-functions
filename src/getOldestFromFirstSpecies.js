// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const pegarId = data.employees.find((elemento) => elemento.id === id).responsibleFor[0];
  const pegarAnimal = data.species.find((elemento) => elemento.id === pegarId);
  const animais = pegarAnimal.residents;
  const animaisAntigos = animais.reduce((acumulador, elemento) => {
    if (acumulador === null || elemento.age > acumulador) return elemento.age;
    return acumulador;
  }, null);
  const pegandoAnimais = animais.filter((elemento) => elemento.age === animaisAntigos)[0];
  const { name, sex, age } = pegandoAnimais;
  return [name, sex, age];
  // seu código aqui
}
// amigo andrey de novais me ajudou nessa

module.exports = getOldestFromFirstSpecies;
