const data = require('../data/zoo_data');

function countAnimals(species) {
  if (!species) {
    const allAnimals = {};

    data.species.forEach((element) => {
      allAnimals[element.name] = element.residents.length;
    });

    return allAnimals;
  }

  if (Object.keys(species).includes('specie') && Object.keys(species).length === 1) {
    return data.species.find((element) =>
      element.name === species.specie).residents.length;
  }
  return data.species.find((element) =>
    element.name === species.specie)
    .residents.filter((element) => element.sex === species.sex).length;
}

module.exports = countAnimals;
