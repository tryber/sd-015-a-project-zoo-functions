const data = require('../data/zoo_data');

const { species } = data;

function countAnimals(animal) {
  //Criando o Objeto com cada espécie como chave e a quantidade como valor
  const obj = {};
  species.forEach((item) => { obj[item.name] = item.residents.length; });

  //sem parâmetros, retorna as espécies e sua quantidade
  if (!animal) return obj;

  const { specie, gender } = animal;
  if (specie && gender) {
    return species
      .find((item) => item.name === specie).residents
      .filter((item) => item.sex === gender).length;
  }

  //recebendo como parâmetro um objeto com a chave \'specie\', retorna um número, a quantidade de animais daquela espécie'
  if (specie) return obj[specie];
}

module.exports = countAnimals;