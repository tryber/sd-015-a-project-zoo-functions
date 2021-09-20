// const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

/* const ne = 'NE';
const nw = 'NW';
const se = 'SE';
const sw = 'SW'; */
function getAnimalMap(options) {

}
module.exports = getAnimalMap;

/* const animaisNe = data.species.reduce((final, objAnimal) => {
      const objFinal = final;
      objFinal[objAnimal.location] = [...objFinal[objAnimal.location], objAnimal.name];
      console.log(objFinal);
      return objFinal;
    }, { NE: [], NW: [], SE: [], SW: [] });
    return animaisNe; */

/* const { includeNames } = options;
  if (!options) {
    const animaisNe = data.species.filter((animal) => animal.location === ne).map((animal2) => animal2.name);
    const animaisNw = data.species.filter((animal) => animal.location === nw).map((animal2) => animal2.name);
    const animaisSe = data.species.filter((animal) => animal.location === se).map((animal2) => animal2.name);
    const animaisSw = data.species.filter((animal) => animal.location === sw).map((animal2) => animal2.name);
    const objetoFinal = { NE: animaisNe, NW: animaisNw, SE: animaisSe, SW: animaisSw };
    console.log(objetoFinal);
    return objetoFinal;
  }
  if (includeNames === true) {
    const animaisNe = data.species.filter((animal) => animal.location === ne).map((animal2) => animal2.name);
    const nomesEspec = Object.values(animaisNe); // nomes das especies
    // console.log(nomes);
    const animaisDaEspecie =
    nomesEspec.forEach(element => {
      console.log(species.name === element);
    });
  }
  return 0;
}
getAnimalMap({ includeNames: true });  */
