const data = require('../data/zoo_data');

const { species } = data;

function getSpeciesByLocations(locations) {
  const result = {};
  locations.forEach((loc) => {
    result[loc] = species.filter((spc) => loc === spc.location).map((sSpc) => sSpc.name);
  });
  return result;
}

function getNamesByLocations(locations) {
  const result = {};
  locations.forEach((loc) => {
    result[loc] = species.filter((spc) => loc === spc.location).map((sSpc) => {
      const objSpcResidents = {};
      objSpcResidents[sSpc.name] = sSpc.residents.map((rsd) => rsd.name);
      return objSpcResidents;
    });
  });
  return result;
}

function getNamesByLocationsAndSex(locations, sex) {
  const result = {};
  locations.forEach((loc) => {
    result[loc] = species.filter((spc) => loc === spc.location).map((sSpc) => {
      const objSpcResidents = {};
      objSpcResidents[sSpc.name] = sSpc.residents.filter((rsd) => rsd.sex === sex)
        .map((rsd) => rsd.name);
      return objSpcResidents;
    });
  });
  return result;
}

function getAnimalMap({ includeNames = 0, sex, sorted } = 0) {
  const locations = ['NE', 'NW', 'SE', 'SW'];
  if (includeNames === 0) {
    return getSpeciesByLocations(locations);
  }
  let result = getNamesByLocations(locations);
  if (sex) {
    result = getNamesByLocationsAndSex(locations, sex);
  }
  if (sorted) {
    locations.forEach((loc) => {
      result[loc].forEach((elm) => {
        const firstKey = Object.keys(elm)[0];
        elm[firstKey].sort();
      });
    });
  }
  return result;
}

module.exports = getAnimalMap;
