// ref: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/154/
const data = require('../data/zoo_data');

// 5. Implemente a função countAnimals
// Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

// Observações técnicas
// Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
// Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
// Com o argumento { specie: 'giraffes', sex: 'female' }, retorna um número, a quantidade de girafas do gênero feminino.

// O que será avaliado
// Sem parâmetros, retorna as espécies e sua quantidade;
// Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
// Recebendo como parâmetro um objeto com a chave specie e sex, retorna um número, a quantidade de animais daquela espécie, no gênero selecionado.

function countAnimals(animal) {
  if (!animal) {
    const totalAnimals = {};
    data.species.forEach((specie) => {
      totalAnimals[specie.name] = specie.residents.length;
    });
    return totalAnimals;
  }

  const { specie, sex } = animal;

  if (!sex) {
    const searchSpecie = data.species.find((spc) => spc.name === specie);
    return searchSpecie.residents.length;
  }

  const searchSpecie2 = data.species.find((spc) => spc.name === specie);
  const searchSpecie2Sex = searchSpecie2.residents.filter((resident) => resident.sex === sex);
  return searchSpecie2Sex.length;
}

module.exports = countAnimals;

