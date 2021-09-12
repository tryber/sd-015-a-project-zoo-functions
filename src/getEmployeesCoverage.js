const data = require('../data/zoo_data');

const { species, employees } = data;

function getAnimalNames(arr) {
  const locations = [];
  const animalsNames = arr.map((e) => {
    const specie = species.find((i) => i.id === e);
    locations.push(specie.location);
    return specie.name;
  });
  return [animalsNames, locations];
}

function makeArr() {
  const res = [];
  employees.forEach((e) => {
    const obj = {};
    const [animalsNames, locations] = getAnimalNames(e.responsibleFor);
    obj.fullName = `${e.firstName} ${e.lastName}`;
    obj.id = e.id;
    obj.locations = locations;
    obj.species = animalsNames;
    res.push(obj);
  });
  return res;
}

function getEmplooyeByName(arr, param) {
  const employ = arr.find((e) => e.fullName.split(' ').includes(param));
  return employ;
}

function getEmplooyeById(arr, param) {
  const employ = employees.find((e) => e.id === param);
  if (employ) {
    const obj = getEmplooyeByName(arr, employ.firstName);
    return obj;
  }
  throw new Error('Informações inválidas');
}

function getEmployeesCoverage(param) {
  const arr = makeArr();
  if (!param) return arr;
  if (param.name) return getEmplooyeByName(arr, param.name);
  if (param.id) return getEmplooyeById(arr, param.id);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
