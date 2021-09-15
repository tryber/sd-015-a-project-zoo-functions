const { species } = require('../data/zoo_data');

function makeObjWithoutNames() {
  return species.reduce((obj, el) => Object.assign(obj, { [el.location]: species.filter((eleme) =>
    eleme.location === el.location).map((name) => name.name) }), {});
}

function makeArray(array, sex, sort) {
  let arrayFinal = array.map((elm) => ({ [elm]: species.find((e) =>
    e.name === elm).residents.map((e) => e.name) }));
  if (sex) {
    arrayFinal = array.map((elm) => ({
      [elm]: species.find((e) => e.name === elm).residents.filter((el) =>
        el.sex === sex).map((e) => e.name) }));
  }
  if (sort) {
    arrayFinal = arrayFinal.map((obj) => ({ [Object.keys(obj)[0]]: Object.values(obj)[0].sort() }));
  }
  return arrayFinal;
}

function makeObjWithNames(sort = false, sex) {
  const objFinal = makeObjWithoutNames();
  const objKeys = Object.keys(objFinal);
  objKeys.forEach((key) => { objFinal[key] = makeArray(objFinal[key], sex, sort); });
  return objFinal;
}

function getAnimalMap({ includeNames = false, sorted = false, sex = false } = {}) {
  if (includeNames === false) {
    return makeObjWithoutNames();
  }
  return makeObjWithNames(sorted, sex);
}

module.exports = getAnimalMap;
