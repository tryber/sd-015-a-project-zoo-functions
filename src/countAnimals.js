const data = require("../data/zoo_data");

function findSpecie(animalSpecie) {
  return data.species.find((elem) => elem.name === animalSpecie).residents;
}

function splitGender(animalSpecie, animalSex) {
  return animalSpecie.filter((elem) => elem.sex === animalSex);
}

function countAnimals(animal) {
  if (animal === undefined) {
    const animalList = {};
    data.species.forEach(
      (elem) => (animalList[elem.name] = elem.residents.length)
    );
    return animalList;
  }
  const { specie, gender } = animal;
  const getSpecie = findSpecie(specie);
  if (!gender) {
    return getSpecie.length;
  }
  return splitGender(getSpecie, gender).length;
}

module.exports = countAnimals;

//! Deletar Abaixo

//* Contagem = residents.length

// Implemente a função countAnimals
// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

// Observações técnicas

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', gender: 'female' }, retorna um número, a quantidade de girafas do gênero feminino.
// O que será avaliado

// Sem parâmetros, retorna as espécies e sua quantidade;
// Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
// Recebendo como parâmetro um objeto com a chave specie e gender, retorna um número, a quantidade de animais daquela espécie, no gênero selecionado.

// countAnimals();
// countAnimals({ specie: "penguins" });
// countAnimals({ specie: "giraffes" });
// countAnimals({ specie: "bears", gender: "female" });
countAnimals({ specie: "elephants", gender: "male" });
