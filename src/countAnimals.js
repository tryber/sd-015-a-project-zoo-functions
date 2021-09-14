const data = require('../data/zoo_data');

const { species } = data;

// Criando o Objeto com cada espécie como chave e a quantidade como valor
function getAllSpeciesAmmount() {
  const speciesList = {};
  species.forEach((specie) => {
    speciesList[specie.name] = specie.residents.length;
  });
  return speciesList;
}

function countSpecie(animal) {
  let result = 0;
  species.forEach((specie) => {
    if (specie.name === animal.specie) {
      result = specie.residents.length;
    }
  });
  return result;
}

function countGender(animal) {
  let result = {};
  species.forEach((specie) => {
    if (specie.name === animal.specie) {
      const filtered = specie.residents.filter((individual) => individual.sex === animal.gender);
      result = filtered.length;
    }
  });
  return result;
}

function countAnimals(animal) {
  if (!animal) return getAllSpeciesAmmount();
  if (!animal.gender) {
    return countSpecie(animal);
  }
  return countGender(animal);
}

module.exports = countAnimals;
