const data = require('../data/zoo_data');

const base = {
  NE: [],
  NW: [],
  SE: [],
  SW: [],
};

function addZones(zone1, zone2, zone3, zone4) {
  const animalsPerZone1 = data.species.filter((animals) => animals.location === zone1);
  animalsPerZone1.forEach((animal) => {
    base[zone1].push(animal.name);
  });
  const animalsPerZone2 = data.species.filter((animals) => animals.location === zone2);
  animalsPerZone2.forEach((animal) => {
    base[zone2].push(animal.name);
  });
  const animalsPerZone3 = data.species.filter((animals) => animals.location === zone3);
  animalsPerZone3.forEach((animal) => {
    base[zone3].push(animal.name);
  });
  const animalsPerZone4 = data.species.filter((animals) => animals.location === zone4);
  animalsPerZone4.forEach((animal) => {
    base[zone4].push(animal.name);
  });
  return base;
}

function getAnimalMap(options) {
  if (options === undefined) return addZones('NE', 'NW', 'SE', 'SW');
}

console.log(getAnimalMap());

module.exports = getAnimalMap;
