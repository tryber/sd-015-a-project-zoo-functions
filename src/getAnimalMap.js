const data = require('../data/zoo_data');

const { species } = data;

const getAllLocations = () => {
  const locations = [];
  species.forEach((e) => {
    if (!locations.includes(e.location)) locations.push(e.location);
  });
  return locations;
};

const noParamAnimals = (locationsCallBack) => {
  const obj = {};
  locationsCallBack().forEach((element) => {
    obj[`${element}`] = species
      .filter((animal) => animal.location === element)
      .map((e) => e.name);
  });
  return obj;
};

const includeNamesAnimals = ({ includeNames, sorted }) => {
  const obj = {};
  const locations = getAllLocations();
  // const { includeNames, sorted } = options;
  if (includeNames && !sorted) {
    locations.forEach((element) => {
      obj[`${element}`] = species
        .filter((animal) => animal.location === element)
        .map((e) => Object.fromEntries([[e.name, e.residents.map((n) => n.name)]]));
    });
  }
  if (includeNames && sorted) {
    locations.forEach((element) => {
      obj[`${element}`] = species
        .filter((animal) => animal.location === element)
        .map((e) => Object.fromEntries([[e.name, e.residents.map((n) => n.name).sort()]]));
    });
  }
  return obj;
};

const includeNameSex = ({ includeNames, sex , sorted}) => {
  const obj = {};
  const locations = getAllLocations();
  const animalSex = sex;
  if (includeNames && sex) {
    locations.forEach((element) => {
      obj[`${element}`] = species.filter((animal) => animal.location === element)
        .map((e) => Object.fromEntries([[e.name, e.residents.filter((n) => n.sex === animalSex)
          .map((s) => s.name)]]));
    });
  }
  if (sex && sorted) {
    locations.forEach((element) => {
      obj[`${element}`] = species.filter((animal) => animal.location === element)
        .map((e) => Object.fromEntries([[e.name, e.residents.filter((n) => n.sex === animalSex)
          .map((s) => s.name).sort()]]));
    });
  }
  return obj;
};

function verifica(options) {
  const { sex, sorted } = options;
  if (sex && !sorted) return noParamAnimals(getAllLocations);
  if (sex && sorted) return noParamAnimals(getAllLocations);
}

function getAnimalMap(options) {
  if (!options) return noParamAnimals(getAllLocations);
  const { includeNames, sex } = options;
  if (!sex) return includeNamesAnimals(options);
  return (includeNames && sex) ? includeNameSex(options) : verifica(options);
}

console.log(noParamAnimals(getAllLocations));
module.exports = getAnimalMap;
