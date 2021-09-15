const data = require('../data/zoo_data');
// 5. Implemente a função countAnimals
// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

// Observações técnicas

// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', gender: 'female' }, retorna um número, a quantidade de girafas do gênero feminino.
// O que será avaliado

// Sem parâmetros, retorna as espécies e sua quantidade;
// Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
// Recebendo como parâmetro um objeto com a chave specie e gender, retorna um número, a quantidade de animais daquela espécie, no gênero selecionado.

const countAnimals = (animal) => {
  const obj = {};
  if (!animal) {
    data.species.forEach((e) => {
      obj[e.name] = e.residents.length;
    });
    return obj;
  }
  const { specie, sex } = animal;
  if (!sex) {
    const specieCount = data.species.find((e) => e.name === specie);
    return specieCount.residents.length;
  }
  if (sex) {
    const sexAnimal = data.species.find((e) => (e.name === specie))
      .residents.filter((j) => j.sex === sex).length;
    return sexAnimal;
  }
};

countAnimals({ specie: 'bears', sex: 'female' });

module.exports = countAnimals;
