const { species } = require('../data/zoo_data');

const createBaseMapObj = (locationObj) =>
  species.reduce((acc, { name, location }) => {
    acc[location].push(name);
    return acc;
  }, locationObj);

const createNamedMapObj = (locationObj, sorted) => {
  const mapObj = species.reduce((acc, { name, location, residents }) => {
    let innerResidents = residents;
    console.log(residents.sort((a, b) => a.name - b.name));
    if (sorted) {
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
      innerResidents = residents.sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      });
    }

    acc[location].push({ [name]: innerResidents.map((resident) => resident.name) });
    return acc;
  }, locationObj);

  return mapObj;
};

const getAnimalMap = (options) => {
  let [includeNames, sorted, sex] = '';
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };

  if (options) ({ includeNames, sorted, sex } = options);
  else return createBaseMapObj(locationObj);

  if (includeNames) return createNamedMapObj(locationObj, sorted);

  return locationObj;
};

module.exports = getAnimalMap;
