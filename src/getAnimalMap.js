const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // array speciesMap com os animais categorizados por localização
  const speciesMap = {
    NE: data.species.filter((anim) => anim.location === 'NE').map((specie) => specie.name),
    NW: data.species.filter((anim) => anim.location === 'NW').map((specie) => specie.name),
    SE: data.species.filter((anim) => anim.location === 'SE').map((specie) => specie.name),
    SW: data.species.filter((anim) => anim.location === 'SW').map((specie) => specie.name),
  };

  if (typeof options === 'undefined') return speciesMap;
  // Sem parâmetros, retorna animais categorizados por localização;
}

console.log(getAnimalMap());
// module.exports = getAnimalMap;
