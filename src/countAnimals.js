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
  const { specie, gender } = animal;
  const { species } = data;

  if (gender === undefined && specie !== undefined) {
    return species.find((specieElem) => specieElem.name === specie).residents
      .length;
  }
  if (gender !== undefined) {
    const chosenSpicie = species.find(
      (specieElem) => specieElem.name === specie,
    );
    return chosenSpicie.residents.filter((resident) => resident.sex === gender)
      .length;
  }
  return listAnimals();
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
