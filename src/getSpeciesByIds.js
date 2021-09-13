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
  const buscaId = species.filter((objeto) => objeto.id === id);
  console.log(id);
  console.log(buscaId);
  return buscaId;
}
getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce', '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae');
// console.log(getSpeciesByIds);
module.exports = getSpeciesByIds;
