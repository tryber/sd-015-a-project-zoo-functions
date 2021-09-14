const data = require('../data/zoo_data');

const listAnimals = () => {
  const objAnimals = {};
  const { species } = data;
  species.forEach((specie) => {
    objAnimals[specie.name] = specie.residents.length;
  });
  return objAnimals;
};

function countAnimals(animal = {}) {
  // seu código aqui
  const { specie, sex } = animal;
  const { species } = data;

  if (sex === undefined && specie !== undefined) {
    return species.find((specieElem) => specieElem.name === specie).residents
      .length;
  }
  if (sex !== undefined) {
    const chosenSpicie = species.find(
      (specieElem) => specieElem.name === specie,
    );
    return chosenSpicie.residents.filter((resident) => resident.sex === sex)
      .length;
  }
  return listAnimals();
}

module.exports = countAnimals;
