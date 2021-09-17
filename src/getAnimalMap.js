const data = require('../data/zoo_data');

const { species } = require('../data/zoo_data');

const nordEste = species.filter(({ location }) => location === 'NE');
const noroWest = species.filter(({ location }) => location === 'NW');
const sudEste = species.filter(({ location }) => location === 'SE');
const sudoWeste = species.filter(({ location }) => location === 'SW');

const getNull = () => {
  const NE = nordEste.map(({ name }) => name);
  const NW = noroWest.map(({ name }) => name);
  const SE = sudEste.map(({ name }) => name);
  const SW = sudoWeste.map(({ name }) => name);
  return { NE, NW, SE, SW };
};

const getSorted = (objSorted, sexSorted, sex, sorted) => {
  if (sex && sorted) {
    return sexSorted.sort();
  }
  if (sorted) {
    return objSorted.sort();
  }
  return sexSorted;
};

const checkOut = (obj, sexId, sorted) => {
  const objSorted = obj.reduce((acc, { name }) => acc.concat(name), []);
  const sexSorted = obj.reduce((acc, { name, sex }) => ((sex === sexId) ? acc
    .concat(name) : acc), []);
  if (!sexId && !sorted) return objSorted;
  return getSorted(objSorted, sexSorted, sexId, sorted);
};

const getAnimal = (sex, sorted) => {
  const NE = nordEste.map(({ name, residents }) => ({ [name]: checkOut(residents, sex, sorted) }));
  const NW = noroWest.map(({ name, residents }) => ({ [name]: checkOut(residents, sex, sorted) }));
  const SE = sudEste.map(({ name, residents }) => ({ [name]: checkOut(residents, sex, sorted) }));
  const SW = sudoWeste.map(({ name, residents }) => ({ [name]: checkOut(residents, sex, sorted) }));

  return { NE, NW, SE, SW };
};

function getAnimalMap(options) {
  if (!options) return getNull();
  const { includeNames = false, sorted = false, sex = false } = options;
  if (!includeNames) return getNull();
  return getAnimal(sex, sorted);
}
console.log(JSON.stringify(getAnimalMap({ includeNames: true })));
module.exports = getAnimalMap;
