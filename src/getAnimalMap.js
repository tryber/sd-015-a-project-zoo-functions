const data = require('../data/zoo_data');

const { species } = data;

function makeAnimalsArray(option, residents) {
  return residents.reduce((acc, curr) => {
    if (option.sex && option.sex === curr.sex) acc.push(curr.name);
    if (!option.sex) acc.push(curr.name);
    return acc;
  }, []);
}

function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  const obj = {};
  species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const animalsNameList = makeAnimalsArray(options, residents);
      if (options.sorted) animalsNameList.sort();
      if (!obj[location]) obj[location] = [];
      obj[location].push({ [name]: animalsNameList });
    } else {
      if (!obj[location]) obj[location] = [];
      obj[location].push(name);
    }
  });
  return obj;
}

module.exports = getAnimalMap;
