const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  const obj = {}; // crio um objeto vazio
  if (animal === undefined) { // se não tiver parâmetro
    species.forEach((element) => { obj[element.name] = element.residents.length; }); // add no objeto vazio uma chave e um valor, q são o nome da 'raça', e a quantidade de animais de cada 'raça'
    return obj;
  }

  const especieResidents = species.find((element) => element.name === animal.specie).residents; // acho (find) o nome do animal em cada elemento, (isso me retorna o elemento todo, não a propriedade) e vejo nesse elemento, se o nome é igual ao animal passado como parametro ({ specie: 'penguins' }), sendo igual, vejo a propriedade residents dele

  // if (animal.specie) {
  //   return especieResidents.length; // achando esse elemento vejo a quantidade de animais q ele tem
  // }

  if (animal.specie && animal.gender) {
    return especieResidents.filter((element) => element.sex.length);
  }
}
console.log(countAnimals({ specie: 'penguins', gender: 'female' }));
// module.exports = countAnimals;
