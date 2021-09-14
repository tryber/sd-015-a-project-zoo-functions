const data = require('../data/zoo_data');

const neAnimals = data.species.filter((item) => item.location === 'NE');
const nwAnimals = data.species.filter((item) => item.location === 'NW');
const seAnimals = data.species.filter((item) => item.location === 'SE');
const swAnimals = data.species.filter((item) => item.location === 'SW');

const getMap = () =>  {
  return {
    NE: neAnimals.map((item) => item.name),
    NW: nwAnimals.map((item) => item.name),
    SE: seAnimals.map((item) => item.name),
    SW: swAnimals.map((item) => item.name),
  }
};

const neAnimalsName = () => {
  const array = [];
  let obj = {};
  neAnimals.reduce((acc, cur) => {
    (obj[cur.name] = cur.residents.map((item) => item.name));
    array.push(obj);
    obj = {};
  }, {})
  return array;
};

const nwAnimalsName = () => {
  const array = [];
  let obj = {};
  nwAnimals.reduce((acc, cur) => {
    (obj[cur.name] = cur.residents.map((item) => item.name));
    array.push(obj);
    obj = {};
  }, {})
  return array;
};

const seAnimalsName = () => {
  const array = [];
  let obj = {};
  seAnimals.reduce((acc, cur) => {
    (obj[cur.name] = cur.residents.map((item) => item.name));
    array.push(obj);
    obj = {};
  }, {})
  return array;
};

const swAnimalsName = () => {
  const array = [];
  let obj = {};
  swAnimals.reduce((acc, cur) => {
    (obj[cur.name] = cur.residents.map((item) => item.name));
    array.push(obj);
    obj = {};
  }, {})
  return array;
};

const includedNames = () => {
  return {
    NE: neAnimalsName(),
    NW: nwAnimalsName(),
    SE: seAnimalsName(),
    SW: swAnimalsName(),
  }
}

const sortedNames = () => {
  return {
    NE: neAnimalsName().sort(),
    NW: nwAnimalsName().sort(),
    SE: seAnimalsName().sort(),
    SW: swAnimalsName().sort(),
  }
}

function getAnimalMap(options) {
  // seu código aqui
  if (!options) return getMap();
  if (options.includeNames === true) return includedNames();
  if (options.sorted === true) return sortedNames();
}

const util = require('util')

//console.log(util.inspect(myObject, {showHidden: false, depth: null, colors: true}))

// alternative shortcut
//console.log(util.inspect(getAnimalMap({ includeNames: true, sorted: true }), false, null, true /* enable colors */))
console.log(neAnimalsName().map((item) => Object.entries(item)));
module.exports = getAnimalMap;
