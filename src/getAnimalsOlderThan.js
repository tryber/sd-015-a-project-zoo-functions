const data = require('../data/zoo_data');

const ageAvaliator = (animal) => {
  let minAge = 100;
  for (let index = 0; index < animal.length; index += 1) {
    if (minAge > animal[index].age) {
      minAge = animal[index].age;
    }
  }
  return minAge;
};

const getAnimalsOlderThan = (animal, age) => {
  const searchSpecies = data.species.find((animalSearch) => animalSearch.name === animal);
  let retorno = true;
  if (age <= ageAvaliator(searchSpecies.residents)) {
    retorno = true;
  } else { retorno = false; }
  return retorno;
};

module.exports = getAnimalsOlderThan;
