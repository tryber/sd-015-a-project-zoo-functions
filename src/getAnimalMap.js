const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getAnimalMap(options) {
  // seu código aqui
  const specieLocation = species.map((specie) => {
    const {location, name, residents} = specie;
    return {location, name, residents};
  })

  const obj = {NE: [], NW: [], SE: [], SW: []}

  // Sem Parâmetros
  if (!options) {
    specieLocation.forEach((specie) => {
      obj[specie.location].push(specie.name);
    })
    return obj;
  }
  // Include Names
  if (options.includeNames === true) {
    specieLocation.forEach((specie) => {
      obj[specie.location][specie.name] = [];
      specie.residents.forEach((resident) => {
        obj[specie.location][specie.name].push(resident.name);
        
        if (options.sorted) obj[specie.location][specie.name].sort();
      }
    )});
    return obj;
    // if (options.sorted === true)
  }
  // Sorted

}

console.log(getAnimalMap({includeNames: true}));

module.exports = getAnimalMap;
