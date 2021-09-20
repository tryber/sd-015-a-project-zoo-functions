const data = require('../data/zoo_data');
// @Vergani95 repositório consultado: https://github.com/tryber/sd-014-a-project-zoo-functions/pull/143/commits/9459a1373dccdae95472a7a973ec505d76e69023
function getSpeciesByIds(...ids) { // rest, eu posso colocar muitos argumentos/parametros. Posso retornar um array chamado "ids", desses parametros.
  if (ids.length === 0) { // se o tamanho da array do rest for igual a 0.
    return []; // então é retornado uma array vazia.
  } return data.species.filter((species) => ids.includes(species.id)); // Caso contrário:Propriedade "species" dentro do arquivo "data" vai ser aplicado um "filter", função que retorna um array do que for verdadeiro dentro da função.
} // dentro de filter: "parametro especies", arrow function, "includes" método na array ids que retorna verdadeiro ou falso a depender se o que estar nos parenteses estiver dentro da array ids.

module.exports = getSpeciesByIds;
