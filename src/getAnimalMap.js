const data = require('../data/zoo_data');

const { species } = data;

function sexDeclared(group, resident, sex) {
  let localGroup = group;
  if (!sex) {
    localGroup = [...group, resident.name];
    return localGroup;
  }
  if (resident.sex === sex) {
    localGroup = [...group, resident.name];
    return localGroup;
  }
  return localGroup;
}

function nameDeclared(sex, residents) {
  return residents.reduce((group, resident) => {
    const localGroup = sexDeclared(group, resident, sex);
    return localGroup;
  }, []);
}

function sortDeclared(residentList, sort) {
  return (sort) ? residentList.sort() : residentList;
}

function getLocation(includeNames, sort, sex) {
  console.log(includeNames, sex, sort);
  return species.reduce((acc, { name, location, residents }) => {
    if (includeNames) {
      let residentList = nameDeclared(sex, residents);
      residentList = sortDeclared(residentList, sort);
      acc[location] = [...acc[location], { [name]: residentList }];
      return acc;
    }
    acc[location].push(name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}

function getAnimalMap(options) {

  const { includeNames = false, sorted = false, sex = false } = options;

  return getLocation(includeNames, sorted, sex);
}

console.log(getAnimalMap({ sex: 'female' }));

module.exports = getAnimalMap;
