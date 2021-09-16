/* Esta função é responsável por contabilizar a quantidade de animais de cada espécie.

Observações técnicas

Se nenhum argumento for passado, retorna um objeto cujo o nome de cada espécie é uma chave desse objeto, e o total de animais dessa espécie é o seu valor;
Com o argumento { specie: 'penguins' }, retorna um número, a quantidade de pinguins no zoológico;
Com o argumento { specie: 'giraffes', gender: 'female' }, retorna um número, a quantidade de girafas do gênero feminino.
O que será avaliado

Sem parâmetros, retorna as espécies e sua quantidade;
Recebendo como parâmetro um objeto com a chave specie, retorna um número, a quantidade de animais daquela espécie;
Recebendo como parâmetro um objeto com a chave specie e gender, retorna um número, a quantidade de animais daquela espécie, no gênero selecionado.  */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) { // entra aqui se nenhum parametro for passado
    const animalsObj = species.reduce((objNames, objData) => {
      const resultado = objNames;
      resultado[objData.name] = objData.residents.length;
      return resultado;
    }, {});
    return animalsObj;
  }
  const { specie, gender } = animal;
  if (!gender) { // entra se tiver somente o nome da especie { specie: 'penguins' }
    const animSelected = species.find((especie) => especie.name === specie);
    return animSelected.residents.length;
  }

  const animSelected = species.find((especie) => especie.name === specie); // entra aqui se tiver passando duas duas chaves no objeto da countAnimals
  const resultado = animSelected.residents.filter((g) => g.sex === animal.gender).length;
  return resultado;
}

console.log(countAnimals());
module.exports = countAnimals;
