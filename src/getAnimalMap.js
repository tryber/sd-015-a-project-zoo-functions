const { species } = require('../data/zoo_data');

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
const sortByName = (a, b) => {
  if (a.name > b.name) return 1;
  if (a.name < b.name) return -1;
  return 0;
};

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
    let innerResidents = residents;
    if (sorted) innerResidents = residents.sort(sortByName);

    acc[location].push({ [name]: innerResidents.map((resident) => resident.name) });
    return acc;
  }, locationObj);

  return mapObj;
};

const getAnimalMap = ({ includeNames = undefined, sorted = false, sex = undefined } = {}) => {
  // let [includeNames, sorted, sex] = '';
  // if (options) ({ includeNames, sorted = false, sex } = options);

  const locationObj = { NE: [], NW: [], SE: [], SW: [] };

  if (includeNames) return createNamedMapObj(locationObj, sorted, sex);
  return createBaseMapObj(locationObj, sex);
};

const options = { includeNames: true, sorted: true };
const actual = getAnimalMap(options);

console.log(actual.NE);

module.exports = getAnimalMap;
