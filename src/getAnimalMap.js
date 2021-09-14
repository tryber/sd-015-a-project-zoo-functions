const { species } = require('../data/zoo_data');

const filterSex = (arr, condition) =>
  arr.map((innerArr) => ({
    ...innerArr,
    residents: innerArr.residents.filter(({ sex }) => sex === condition),
  }));

const createBaseMapObj = (locationObj, sex) => {
  let innerSpecies = species;
  if (sex) innerSpecies = filterSex(innerSpecies, sex);

  return innerSpecies.reduce((acc, { name, location }) => {
    acc[location].push(name);
    return acc;
  }, locationObj);
};

const createNamedMapObj = (locationObj, sorted, sex) => {
  let innerSpecies = species;
  if (sex) innerSpecies = filterSex(innerSpecies, sex);

  const mapObj = innerSpecies.reduce((acc, { name, location, residents }) => {
    const innerResidents = residents;

    if (sorted) {
      acc[location].push({ [name]: innerResidents.map((resident) => resident.name).sort() });
      return acc;
    }
    acc[location].push({ [name]: innerResidents.map((resident) => resident.name) });
    return acc;
  }, locationObj);

  return mapObj;
};

const getAnimalMap = ({ includeNames = false, sorted = false, sex = false } = {}) => {
  const locationObj = { NE: [], NW: [], SE: [], SW: [] };

  if (includeNames) return createNamedMapObj(locationObj, sorted, sex);
  return createBaseMapObj(locationObj, sex);
};

module.exports = getAnimalMap;
