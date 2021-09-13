const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// pegando localização
const ne = species.filter((element) => element.location === 'NE');
const nw = species.filter((element) => element.location === 'NW');
const se = species.filter((element) => element.location === 'SE');
const sw = species.filter((element) => element.location === 'SW');

const getLocation = () => {
  return ({
    NE: ne.map((value) => value.name),
    NW: nw.map((value) => value.name),
    SE: se.map((value) => value.name),
    SW: sw.map((value) => value.name),
  })
}
// pegando residentes por localização e nome
const namesByLocation = () => {
  return ({
    NE: ne.map((element) => ({
      [element.name]: element.residents.map((value) => value.name)
    })),
    NW: nw.map((element) => ({
      [element.name]: element.residents.map((value) => value.name)
    })),
    SE: se.map((element) => ({
      [element.name]: element.residents.map((value) => value.name)
    })),
    SW: sw.map((element) => ({
      [element.name]: element.residents.map((value) => value.name)
    })),
  })
}

console.log(namesByLocation());

function getAnimalMap(options) {
  if (options === undefined) {
    return getLocation();
  }
  else if (options.includeNames) {
    return namesByLocation();
  }
}

module.exports = getAnimalMap;
