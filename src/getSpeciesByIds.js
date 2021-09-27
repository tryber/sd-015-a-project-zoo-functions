//  Esta função é responsável pela busca das espécies de animais por id.
//  Ela retorna um array contendo as espécies
//  referentes aos ids passados como parâmetro, podendo receber um ou mais ids.
const data = require('../data/zoo_data');
                        //espalha o array
function getSpeciesByIds(...ids) {
  // seu código aqui

  //  array vazio
  let array = [];
  //  insere a variável ids no forEach, puxa o primeiro item, puxa o array que o critério seja a especie com id única. 
  //  specie é igual ao primeiro parametro
  ids.forEach((item) => array.push(data.species.find((specie) => specie.id === item)));
  //retorna o array com as especies
  return array;
  
}

module.exports = getSpeciesByIds;
