const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  // 1.
  const obj = {}; // crio um objeto vazio
  if (animal === undefined) { // se não tiver parâmetro
    species.forEach((element) => { obj[element.name] = element.residents.length; }); // add no objeto vazio uma chave e um valor, q são o nome da 'raça', e a quantidade de animais de cada 'raça'
    return obj;
  }
  // const para fazer o quesito 2 e 3
  const especieResidents = species.find((element) => element.name === animal.specie).residents; // acho (find) o nome do animal em cada elemento, (isso me retorna o elemento todo, não a propriedade) e vejo nesse elemento, se o nome é igual ao animal passado como parametro ({ specie: 'penguins' }), sendo igual, vejo a propriedade residents dele

  // 3.
  if (animal.specie && animal.sex) {
    return especieResidents.filter((element) => element.sex === animal.sex).length; // dentro de residents do animal passado no primeiro parâmetro, vejo se o sexo é igual ao sexo passado no segundo parâmetro, se for eu pego a quantidade usando o length
  }
  // 2.
  return especieResidents.length; // achando esse elemento vejo a quantidade de animais q ele tem
}
// console.log(countAnimals({ specie: 'bears', sex: 'female' }));
module.exports = countAnimals;
