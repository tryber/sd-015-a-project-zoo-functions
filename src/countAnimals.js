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

function countAnimals(...animal) {
  if (animal.keys === 'especie') {
    const { specie } = animal;
    console.log(typeof animal);
    const animais = species.filter((obj) => obj.name === specie);
    const qtdAnimls = animais.map((index) => index.residents.length);
    const resultado = qtdAnimls[0];
    return resultado;
  }
  /* if (!typeof animal.specie === 'undefined' && (!typeof animal.sex === 'undefined')) {
    return console.log('Funcionou');
  } */
  /* if (){

  } */
}
countAnimals({ specie: 'giraffes', sex: 'female' });
module.exports = countAnimals;
