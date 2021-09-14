const data = require('../data/zoo_data');

function filterByGender(individual) {
  if (individual.sex === this.sex) {
    return individual.name;
  }
}

function namesObjectSorted(specie) {
  const animalsWithNames = {};
  if (this.sex === 'all') {
    animalsWithNames[specie.name] = specie.residents.map((individual) => individual.name);
  } else {
    const objectsFiltered = specie.residents.filter(filterByGender, this);
    animalsWithNames[specie.name] = objectsFiltered.map((individual) => individual.name);
  }
  if (this.sorted) {
    animalsWithNames[specie.name] = animalsWithNames[specie.name].sort();
  }
  return animalsWithNames;
}

function filterWithNames(options) {
  const result = {
    NE: data.species.filter((specie) => specie.location === 'NE').map(namesObjectSorted, options),
    NW: data.species.filter((specie) => specie.location === 'NW').map(namesObjectSorted, options),
    SE: data.species.filter((specie) => specie.location === 'SE').map(namesObjectSorted, options),
    SW: data.species.filter((specie) => specie.location === 'SW').map(namesObjectSorted, options),
  };
  console.log(result.NE);
  return result;
}

function filterByRegion() {
  const result = {
    NE: data.species.filter((specie) => specie.location === 'NE').map((specie) => specie.name),
    NW: data.species.filter((specie) => specie.location === 'NW').map((specie) => specie.name),
    SE: data.species.filter((specie) => specie.location === 'SE').map((specie) => specie.name),
    SW: data.species.filter((specie) => specie.location === 'SW').map((specie) => specie.name),
  };
  return result;
}

function validateOptions(options) {
  let filters = options;
  if (typeof options === 'undefined') {
    filters = {
      includeNames: false,
      sorted: false,
      sex: 'all',
    };
  }
  if (typeof filters.includeNames === 'undefined') {
    filters.includeNames = false;
  }
  if (typeof filters.sorted === 'undefined') {
    filters.sorted = false;
  }
  if (typeof filters.sex === 'undefined') {
    filters.sex = 'all';
  }
  return filters;
}

function getAnimalMap(options) {
  // seu código aqui
  const filters = validateOptions(options);
  if (filters.includeNames) {
    return filterWithNames(filters);
  }
  const result = filterByRegion();
  return result;
}

module.exports = getAnimalMap;
const options = { includeNames: true, sex: 'female' };
console.log(getAnimalMap(options));
