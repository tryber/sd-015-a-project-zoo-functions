const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// CREDITS TO CAIO LIMA. HIS CODE GIVE ME THE INSIGHT ABOUT HOW TO ORGANIZE MINE TO GET THE BEST RESULT

// IF THERE IS NO INCLUDE NAMES OPTION
const noOption = (location) => species
  .filter((specie) => specie.location === location)
  .map((specie) => specie.name);

// IF THERE IS ONLY THE INCLUDE NAMES OPTION (BUT MAYBE SORTED OPTION TOO)
const includeNamesOption = (location, options) => species
  .filter((specie) => specie.location === location)
  .map((specie) => {
    if (options.sorted) {
      return {
        [specie.name]: specie.residents
          .map((resident) => resident.name).sort(),
      };
    }
    return {
      [specie.name]: specie.residents
        .map((resident) => resident.name),
    };
  });

// IF THERE IS INCLUDE NAMES AND SEX OPTIONS (MAYBE SORTED OPTION TOO)
const sexOption = (location, options) => species
  .filter((specie) => specie.location === location)
  .map((specie) => {
    if (options.sorted) {
      return {
        [specie.name]: specie.residents
          .filter((resident) => resident.sex === options.sex)
          .map((resident) => resident.name).sort(),
      };
    }
    return {
      [specie.name]: specie.residents
        .filter((resident) => resident.sex === options.sex)
        .map((resident) => resident.name),
    };
  });

// CREATES ANIMALS LIST
const createAnimalsList = (location, options) => {
  if (!options) return noOption(location);
  if (options.includeNames) {
    if (options.sex) {
      return sexOption(location, options);
    }
    return includeNamesOption(location, options);
  }
  return noOption(location);
};

// MAIN FUNCTION
const getAnimalMap = (options) => ({
  NE: createAnimalsList('NE', options),
  NW: createAnimalsList('NW', options),
  SE: createAnimalsList('SE', options),
  SW: createAnimalsList('SW', options),
});

module.exports = getAnimalMap;
