const data = require('../data/zoo_data');

const zoo = {};
function cadaUm(especie) {
  zoo[`${especie.name}`] = especie.residents.length;
  return zoo;
}

function countAnimals(animal) {
  // 1 - Sem parâmetros, retorna as espécies e sua quantidade
  if (animal === undefined) {
    data.species.forEach(cadaUm);
    return zoo;
  // 3 - recebendo como parâmetro um objeto com a chave 'specie' e 'gender', retorna um número, a quantidade de animais daquela espécie, no gênero selecionado
  } if (animal.sex) {
    const animais = data.species.find((element) => animal.sex === element.name);
    const porSexo = animais.residents.filter((element) => animal.sex === element.sex);
    return porSexo.length;
  }
  // 2 - recebendo como parâmetro um objeto com a chave 'specie', retorna um número, a quantidade de animais daquela espécie
  const bicho = data.species.find((element) => animal.specie === element.name);
  return bicho.residents.length;
}

module.exports = countAnimals;
