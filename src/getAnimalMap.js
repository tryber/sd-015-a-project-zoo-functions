const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const locals = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

const allAnimals = () => {
  species.forEach(({ location, name }) => locals[location].push(name));
  return locals;
};

const tests = (includeNames, sex) => {
  if (includeNames) {
    species.forEach(({ name, location, residents }) => {
      const x = [];
      let after = residents;
      if (sex) {
        const sexOf = () => residents.filter((resident) => resident.sex === sex);
        after = sexOf();
      }
      after.forEach((element) => x.push(element.name));
      locals[location].push({ [name]: x });
    });
    return locals;
  }
};
function getAnimalMap(options) {
  if (!options) allAnimals();

  const { includeNames = false, sort = false, sex = false } = options;
  const abc = tests(includeNames, sex);
  if (sort) {
    const { NE, NW, SE, SW } = abc;
    NE.forEach((element) => Object.values(element)[0].sort());
    NW.forEach((element) => Object.values(element)[0].sort());
    SE.forEach((element) => Object.values(element)[0].sort());
    SW.forEach((element) => Object.values(element)[0].sort());
  }
  return abc;
}

console.log(getAnimalMap({ includeNames: true, sort: true, sex: 'male' }));
module.exports = getAnimalMap;
