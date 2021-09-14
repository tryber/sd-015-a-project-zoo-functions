const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const noOptions = () => ({
  NE: species
    .filter((specie) => specie.location === 'NE')
    .map((specie) => specie.name),
  NW: species
    .filter((specie) => specie.location === 'NW')
    .map((specie) => specie.name),
  SE: species
    .filter((specie) => specie.location === 'SE')
    .map((specie) => specie.name),
  SW: species
    .filter((specie) => specie.location === 'SW')
    .map((specie) => specie.name),
});

const includeNamesOption = () => ({
  NE: species
    .filter((specie) => specie.location === 'NE')
    .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
  NW: species
    .filter((specie) => specie.location === 'NW')
    .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
  SE: species
    .filter((specie) => specie.location === 'SE')
    .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
  SW: species
    .filter((specie) => specie.location === 'SW')
    .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
});

// const sortedOption = () => ({
//   NE: species
//     .filter((specie) => specie.location === 'NE')
//     .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
//   NW: species
//     .filter((specie) => specie.location === 'NW')
//     .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
//   SE: species
//     .filter((specie) => specie.location === 'SE')
//     .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
//   SW: species
//     .filter((specie) => specie.location === 'SW')
//     .map((specie) => ({ [specie.name]: specie.residents.map((resident) => resident.name) })),
// });

const getAnimalMap = (options) => {
  if (!options) {
    return noOptions();
  }
  if (options.includeNames === true) {
    return includeNamesOption();
  }
  if (options.sorted === true) {
    // return sortedOption();
  }
};

module.exports = getAnimalMap;

console.table(getAnimalMap({ includeNames: true }));
