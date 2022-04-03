const data = require('../data/zoo_data');

const { species } = data;

const localeAnimals = () => {
  const animalsLocated = {};

  animalsLocated.NE = (species.filter((allAnimals) => allAnimals.location === 'NE')
    .map((animals) => animals.name));
  animalsLocated.NW = (species.filter((allAnimals) => allAnimals.location === 'NW')
    .map((animals) => animals.name));
  animalsLocated.SE = (species.filter((allAnimals) => allAnimals.location === 'SE')
    .map((animals) => animals.name));
  animalsLocated.SW = (species.filter((allAnimals) => allAnimals.location === 'SW')
    .map((animals) => animals.name));

  return animalsLocated;
};

const sortedAndSex = (options, animals) => {
  const names = animals.residents.filter((sex) => sex.sex === options.sex)
    .map((resident) => resident.name);
  if (options.sorted) return names.sort();
  return names;
};

const mapNames = (options, animals) => {
  const names = animals.residents.map((resident) => resident.name);
  if (Object.keys(options).length === 3) return sortedAndSex(options, animals);
  if (options.sorted) return names.sort();
  if (options.sex === 'male') {
    return animals.residents.filter((sex) => sex.sex === 'male')
      .map((resident) => resident.name);
  }
  if (options.sex === 'female') {
    return animals.residents.filter((sex) => sex.sex === 'female')
      .map((resident) => resident.name);
  }
  return names;
};

const animalsSorted = (options) => {
  const animalsLocated = {};
  animalsLocated.NE = (species.filter((allAnimals) => allAnimals.location === 'NE')
    .map((animals) => ({
      [animals.name]: mapNames(options, animals),
    })));
  animalsLocated.NW = (species.filter((allAnimals) => allAnimals.location === 'NW')
    .map((animals) => ({
      [animals.name]: mapNames(options, animals),
    })));
  animalsLocated.SE = (species.filter((allAnimals) => allAnimals.location === 'SE')
    .map((animals) => ({
      [animals.name]: mapNames(options, animals),
    })));
  animalsLocated.SW = (species.filter((allAnimals) => allAnimals.location === 'SW')
    .map((animals) => ({
      [animals.name]: mapNames(options, animals),
    })));
  return animalsLocated;
};

function getAnimalMap(options) {
  if (!options || !options.includeNames) return localeAnimals();
  if (options.includeNames) return animalsSorted(options);
}

// console.log(util.inspect(getAnimalMap({ includeNames: true, sex: 'female', sort: true }), false, null));

module.exports = getAnimalMap;
