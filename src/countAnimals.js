const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  const obj = {};
  if (animal === undefined) {
    species.forEach((elemento) => { obj[elemento.name] = elemento.residents.length; });
    return obj;
    // nessa condicional caso o parametro seja vazio, faco um for each para pegar todas as especies e colocar em um array criado anteriormente
  }
  const { specie, gender } = animal;
  // desestruturei os parametro para cessalos de forma independente
  const animal2 = species.find((elemento) => elemento.name === specie).residents;
  // atribui a animal2 o objeto que condiz com o parametro, porem resgatei o array residents
  const residentes = animal2.reduce((acc, element) => (element.sex === gender ? acc + 1 : acc), 0);
  // usei o array resgatado acima para contar quantos animaisi tinha pelo sexo.
  return gender === undefined ? animal2.length : residentes;
  // caso nao fosse passado qual genero ele quer, retorna o length do array de residentes, caso contrario  retorna a rinha 16.
}

module.exports = countAnimals;
