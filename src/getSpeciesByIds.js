/* Esta função é responsável pela busca das espécies de animais por id. Ela retorna um array contendo as espécies referentes aos ids passados como parâmetro, podendo receber um ou mais ids.

Observações técnicas

O parâmetro desta função pode ser alterado para atender ao requisito proposto.
O que será avaliado

Caso receba nenhum parâmetro, necessário retornar um array vazio;
Ao receber como parâmetro um único id, retorna um array com a espécie referente à esse id;
Ao receber mais de um id, retorna um array com as espécies referentes aos ids.
 */
const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* function getSpeciesByIds(...id) {
    const buscaId = (id) => id === species.id;
    const resultado = species.map(buscaId);
    console.log(resultado);
    return resultado;
} */
function getSpeciesByIds(...id) {
  if (id.length === 0) {
    return [];
  }
  if (id.length > 1) {
    const busca = species.filter((obj) => id.includes(obj.id));
    // console.log(busca);
    return busca;
  }
  const buscaId = species.filter((objeto) => objeto.id.includes(id));
  // console.log(buscaId);
  return buscaId;
}
// getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '78460a91-f4da-4dea-a469-86fd2b8ccc84',
// '89be95b3-47e4-4c5b-b687-1fabf2afa274');
module.exports = getSpeciesByIds;
