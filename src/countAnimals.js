/* eslint-disable sonarjs/no-use-of-empty-return-value */
const { species } = require('../data/zoo_data');

const countAnimals = (speciesAnimal) => {
  if (!speciesAnimal) {
    const obj = {};
    species.forEach((specie) => { obj[specie.name] = specie.residents.length; });
    return obj;
  }

  const includesSpecie = Object.keys(speciesAnimal).includes('specie');
  const includesSex = Object.keys(speciesAnimal).includes('sex');

  const amontSpecie = species.find((specie) => specie.name === speciesAnimal.specie).residents;

  const amontSpecieAndSex = amontSpecie.filter((animal) => animal.sex === speciesAnimal.sex);

  return (includesSpecie && !includesSex)
    ? amontSpecie.length
    : amontSpecieAndSex.length;
};

module.exports = countAnimals;
