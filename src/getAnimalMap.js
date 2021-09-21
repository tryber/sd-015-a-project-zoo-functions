const data = require('../data/zoo_data');
const { species } = data

function getAnimalMap(options) {
  // seu código aqui
  if(options === undefined) {
    return especieAnimalLocaliza()
  } 
}

function especieAnimalLocaliza() {
  const areasObjeto = {
    NE: species.filter((element) => element.location.includes('NE')).map((element) => element.name),
    NW: species.filter((element) => element.location.includes('NW')).map((element) => element.name),
    SE: species.filter((element) => element.location.includes('SE')).map((element) => element.name),
    SW: species.filter((element) => element.location.includes('SW')).map((element) => element.name)
  }
  return areasObjeto;
}  

function criarObjetoNome() {
  const NE = species.filter((element) => element.location.includes('NE')).map((element) => element.name);
  
  const objetoReposta = {
    NE
  }
  
  console.log(objetoReposta)
}

criarObjetoNome()



module.exports = getAnimalMap;



// species.filter((element) => element.location.includes('NE')).map((element) => element.residents)

// function ordenarElementos(elemento) {
//   const objeto = Object.values(elemento).sort()
//   return objeto
// }