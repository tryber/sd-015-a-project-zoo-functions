const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const sortCase = (options, array) => {
  if (options) {
    const sorte = array.sort();
    return sorte;
  }
  return array;
};

const generateLocals = () => {
  const locals = {
    NE: [],
    NW: [],
    SE: [],
    SW: [],
  };
  return locals;
};

const allAnimals = () => {
  const locals = generateLocals();
  species.forEach(({ location, name }) => locals[location].push(name));
  return locals;
};

const tests = (options) => {
  const locals = generateLocals();
  const { includeNames, sex, sorted } = options;
  if (includeNames) {
    species.forEach((specie) => {
      const { name, location, residents } = specie;
      const x = [];
      let after = residents;
      if (sex) {
        const sexOf = residents.filter((resident) => resident.sex === sex);
        after = sexOf;
      }
      after.forEach((element) => { x.push(element.name); });
      locals[location].push({ [name]: sortCase(sorted, x) });
    });
    return locals;
  }
};
function getAnimalMap(options = {}) {
  const { includeNames = false, sorted = false, sex = undefined } = options;
  if (!includeNames && !sorted && !sex) {
    return allAnimals();
  }
  if (!includeNames) {
    return allAnimals();
  }
  return tests(options);
}

// console.log(getAnimalMap());
module.exports = getAnimalMap;
