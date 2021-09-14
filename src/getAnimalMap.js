const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function noParameters(specieLocation, obj) {
  specieLocation.forEach((specie) => {
    obj[specie.location].push(specie.name);
  });
}

function withSex(specie, options, arr) {
  specie.residents.forEach((resident) => {
    if (resident.sex === options.sex) arr.push(resident.name);
  });
}

function withoutSex(specie, options, arr) {
  specie.residents.forEach((resident) => {
    arr.push(resident.name);
  });
}

function withName(options, obj, specieLocation) {
  specieLocation.forEach((specie) => {
    const location = obj[specie.location];
    const arr = [];
    const objarr = {};

    // Sex
    if (options.sex) {
      withSex(specie, options, arr);
    } else {
      withoutSex(specie, options, arr);
    }
    // Sorted
    if (options.sorted) arr.sort();

    objarr[specie.name] = arr;
    location.push(objarr);
  });
}

function getAnimalMap(options) {
  // seu código aqui
  const specieLocation = species.map((specie) => {
    const { location, name, residents } = specie;
    return { location, name, residents };
  });
  const obj = { NE: [], NW: [], SE: [], SW: [] };

  // Sem Parâmetros
  if (!options || !options.includeNames) {
    noParameters(specieLocation, obj);
    return obj;
  }

  // Include Names
  if (options.includeNames === true) {
    withName(options, obj, specieLocation);
    return obj;
  }
}

console.log(JSON.stringify(getAnimalMap({ includeNames: true, sex: 'female' })));

module.exports = getAnimalMap;
