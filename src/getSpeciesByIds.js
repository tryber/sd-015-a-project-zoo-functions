const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getSpeciesByIds(...param) {
  const animalSelecionado = species.filter((element) => {
     if (element.id === param) {
       return element;
     }
    if (param === undefined) return ['a'];
   });
 return animalSelecionado;
}
// getSpeciesByIds('0938aa23-f153-4937-9f88-4858b24d6bce');
 console.log(getSpeciesByIds());
module.exports = getSpeciesByIds;
'0938aa23-f153-4937-9f88-4858b24d6bce'