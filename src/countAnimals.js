const data = require('../data/zoo_data');

function countAnimals(species) {
  if (!species) {
    const allAnimals = {};
    data.species.forEach((specie) => { allAnimals[specie.name] = specie.residents.length; });
    return allAnimals;
  }

  const paramIncludesSpecie = Object.keys(species).includes('specie');
  const paramIncludesSex = Object.keys(species).includes('sex');

  const amontResidents = data.species
    .find((specie) => specie.name === species.specie).residents;

  const amontResidentsPerSex = amontResidents
    .filter((animal) => animal.sex === species.sex);

  return (paramIncludesSpecie && !paramIncludesSex)
    ? amontResidents.length : amontResidentsPerSex.length;
}

module.exports = countAnimals;
