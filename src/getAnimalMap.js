const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function makeObjWithoutNames() {
  return {
    NE: species.filter((elem) => elem.location === 'NE').map((name) => name.name),
    NW: species.filter((elem) => elem.location === 'NW').map((name) => name.name),
    SE: species.filter((elem) => elem.location === 'SE').map((name) => name.name),
    SW: species.filter((elem) => elem.location === 'SW').map((name) => name.name),
  };
}

function makeArray(array, sex, sort) {
  if (sort) {
    if (sex === 'all') {
      return array.map((elm) => ({
        [elm]: species.find((e) =>
          e.name === elm).residents.map((e) => e.name).sort() }));
    }
    return array.map((elm) => ({
      [elm]: species.find((e) =>
        e.name === elm).residents.filter((el) => el.sex === sex).map((e) => e.name).sort() }));
  }
  if (sex === 'all') {
    return array.map((elm) => ({
      [elm]: species.find((e) =>
        e.name === elm).residents.map((e) => e.name) }));
  }
  return array.map((elm) => ({
    [elm]: species.find((e) =>
      e.name === elm).residents.filter((el) => el.sex === sex).map((e) => e.name) }));
}

function makeObjWithNames(sort = false, sex) {
  const obj = makeObjWithoutNames();
  obj.NE = makeArray(obj.NE, sex, sort);
  obj.NW = makeArray(obj.NW, sex, sort);
  obj.SE = makeArray(obj.SE, sex, sort);
  obj.SW = makeArray(obj.SW, sex, sort);
  return obj;
}

function getAnimalMap({ includeNames = false, sorted = false, sex = 'all' } = {}) {
  if (includeNames === false) {
    return makeObjWithoutNames();
  }
  return makeObjWithNames(sorted, sex);
}

module.exports = getAnimalMap;
