const data = require('../data/zoo_data');

const { species, employees } = data;

function getAnimalNames(arr) {
  const res = [];
  const animalsNames = arr.map((e) => {
    const { location, name } = species.find((i) => i.id === e);
    res.push(location);
    return name;
  });
  return [animalsNames, res];
}

function makeArr() {
  const res = [];
  employees.forEach((e) => {
    const [animalsNames, locations] = getAnimalNames(e.responsibleFor);
    const obj = {
      fullName: `${e.firstName} ${e.lastName}`,
      id: e.id,
      locations,
      species: animalsNames,
    };
    res.push(obj);
  });
  return res;
}

const getEmplooyeByName = (arr, param) => arr.find((e) => e.fullName.split(' ').includes(param));

function getEmplooyeById(arr, param) {
  const employ = employees.find((e) => e.id === param);
  if (employ) return getEmplooyeByName(arr, employ.firstName);
  throw new Error('Informações inválidas');
}

function getEmployeesCoverage({ name, id } = '') {
  const arr = makeArr();
  if (!name && !id) return arr;
  if (name) return getEmplooyeByName(arr, name);
  if (id) return getEmplooyeById(arr, id);
  throw new Error('Informações inválidas');
}

module.exports = getEmployeesCoverage;
