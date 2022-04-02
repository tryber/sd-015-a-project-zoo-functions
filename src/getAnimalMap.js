const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const math = (arr) => {
  const result = arr;
  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] !== undefined) {
      result[i] = i + 1;
    } else {
      result[i] = 0;
    }
  }
  return result;
};

const sum = (a, b) => a + b;

const namesNE = (pos) => species.filter((r) => r.location === pos).map((animal) => animal.name);

const aniNames = (animalName, sex) => {
  const animalFind = species.filter((r) => r.name === animalName).find((e) => e.residents);
  let result;
  if (!sex) {
    result = animalFind.residents.map((residen) => residen.name);
  } else {
    result = animalFind.residents.filter((obj) => obj.sex === sex).map((residen) => residen.name);
  }
  return result;
};

function mapOnlyName() {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  map.NE = [{ [`${namesNE('NE')[0]}`]: aniNames(namesNE('NE')[0]) },
    { [`${namesNE('NE')[1]}`]: aniNames(namesNE('NE')[1]) }];
  map.NW = [{ [`${namesNE('NW')[0]}`]: aniNames(namesNE('NW')[0]) },
    { [`${namesNE('NW')[1]}`]: aniNames(namesNE('NW')[1]) },
    { [`${namesNE('NW')[2]}`]: aniNames(namesNE('NW')[2]) }];
  map.SE = [{ [`${namesNE('SE')[0]}`]: aniNames(namesNE('SE')[0]) },
    { [`${namesNE('SE')[1]}`]: aniNames(namesNE('SE')[1]) }];
  map.SW = [{ [`${namesNE('SW')[0]}`]: aniNames(namesNE('SW')[0]) },
    { [`${namesNE('SW')[1]}`]: aniNames(namesNE('SW')[1]) }];
  return map;
}

function mapNameSex(sex) {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  map.NE = [{ [`${namesNE('NE')[0]}`]: aniNames(namesNE('NE')[0], sex) },
    { [`${namesNE('NE')[1]}`]: aniNames(namesNE('NE')[1], sex) }];
  map.NW = [{ [`${namesNE('NW')[0]}`]: aniNames(namesNE('NW')[0], sex) },
    { [`${namesNE('NW')[1]}`]: aniNames(namesNE('NW')[1], sex) },
    { [`${namesNE('NW')[2]}`]: aniNames(namesNE('NW')[2], sex) }];
  map.SE = [{ [`${namesNE('SE')[0]}`]: aniNames(namesNE('SE')[0], sex) },
    { [`${namesNE('SE')[1]}`]: aniNames(namesNE('SE')[1], sex) }];
  map.SW = [{ [`${namesNE('SW')[0]}`]: aniNames(namesNE('SW')[0], sex) },
    { [`${namesNE('SW')[1]}`]: aniNames(namesNE('SW')[1], sex) }];
  return map;
}

function mapNameSexSorted(sex) {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  map.NE = [{ [`${namesNE('NE')[0]}`]: aniNames(namesNE('NE')[0], sex).sort() },
    { [`${namesNE('NE')[1]}`]: aniNames(namesNE('NE')[1], sex).sort() }];
  map.NW = [{ [`${namesNE('NW')[0]}`]: aniNames(namesNE('NW')[0], sex).sort() },
    { [`${namesNE('NW')[1]}`]: aniNames(namesNE('NW')[1], sex).sort() },
    { [`${namesNE('NW')[2]}`]: aniNames(namesNE('NW')[2], sex).sort() }];
  map.SE = [{ [`${namesNE('SE')[0]}`]: aniNames(namesNE('SE')[0], sex).sort() },
    { [`${namesNE('SE')[1]}`]: aniNames(namesNE('SE')[1], sex).sort() }];
  map.SW = [{ [`${namesNE('SW')[0]}`]: aniNames(namesNE('SW')[0], sex).sort() },
    { [`${namesNE('SW')[1]}`]: aniNames(namesNE('SW')[1], sex).sort() }];
  return map;
}

function orderMapDefault() {
  const map = { NE: [], NW: [], SE: [], SW: [] };
  Object.keys(map).forEach((element) => {
    map[`${element}`] = species.filter((kind) => kind.location === element).map((animal) =>
      Object.values(animal)[1]);
  });
  return map;
}

function buildMap(name, sex, sorted) {
  let map = { NE: [], NW: [], SE: [], SW: [] };
  let rAll = [];
  rAll.push(name, sex, sorted);
  console.log(rAll);
  rAll = [math(rAll).reduce((sum))];
  console.log(rAll);
  if (rAll[0] === 1) {
    map = mapOnlyName();
  } else if (rAll[0] === 3) {
    map = mapNameSex(sex);
  } else if (rAll[0] === 4) {
    map = mapNameSexSorted();
  } else if (rAll[0] === 6) {
    map = mapNameSexSorted(sex);
  } else {
    map = orderMapDefault();
  }
  return map;
}

function getAnimalMap(options) {
  let result;
  if (!options) {
    result = buildMap();
  } else {
    result = buildMap(options.includeNames, options.sex, options.sorted);
  }
  return result;
}

module.exports = getAnimalMap;
