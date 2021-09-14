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
  if (!options || !options.includeNames) {
    specieLocation.forEach((specie) => {
      obj[specie.location].push(specie.name);
    })
    return obj;
  }
  // Include Names
  if (options.includeNames === true) {
    specieLocation.forEach((specie) => {

      const location = obj[specie.location];

      let arr = [];
      let objarr = {};

      // Sex
      if (options.sex) {
        specie.residents.filter((resident) => {
          if (resident.sex === options.sex) arr.push(resident.name);
          // Sorted
          if (options.sorted) arr.sort();
        })
      } else { 
        specie.residents.forEach((resident) => { 
          arr.push(resident.name);
        // Sorted
        if (options.sorted) arr.sort();
      })}

      objarr[specie.name] = arr;
      location.push(objarr);
    });
    return obj;
  }
  // Sorted

}

console.table(getAnimalMap({includeNames: true, sex: 'female'}));

module.exports = getAnimalMap;
