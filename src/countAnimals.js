const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const finalObject = {}; const speciesList = [];
    data.species.forEach((specie) => {
      speciesList.push(specie.name);
    }); const speciesQuantityList = []; data.species.forEach((specie) => {
      speciesQuantityList.push(specie.residents.length);
    }); speciesList.forEach((specie, idx) => {
      finalObject[specie] = speciesQuantityList[idx];
    }); return finalObject;
  }
  const { sex } = animal; const { specie } = animal;
  if (sex === undefined) {
    return (data.species.find((specieOfChoosing) => specieOfChoosing.name === specie))
      .residents.length;
  }
  const specieAndGenderResult = data.species.find((specieOfChoosing) =>
    specieOfChoosing.name === specie).residents.filter((resident) => resident.sex === sex);
  return specieAndGenderResult.length;
}

module.exports = countAnimals;
