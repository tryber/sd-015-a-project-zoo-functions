/* ### 1. Implemente a função `getSpeciesByIds`

Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

**Observações técnicas**

- O parâmetro desta função pode ser alterado para atender ao requisito proposto.

**O que será avaliado**

- Caso receba nenhum parâmetro, necessário retornar um array vazio;
- Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
- Ao receber mais de um id, retorna um array com as espécies referentes aos ids. */

const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const result = [];
  ids.forEach((elementFor) =>
    result.push(species.filter((elementFilter) =>
      elementFilter.id === elementFor)[0]));
  return result;
}

// console.log(getSpeciesByIds('89be95b3-47e4-4c5b-b687-1fabf2afa274', 'baa6e93a-f295-44e7-8f70-2bcdc6f6948d'));
module.exports = getSpeciesByIds;
