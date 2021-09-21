const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    const animals = {};
    data.species.forEach((names) => {
      animals[names.name] = names.residents.length;
    });
    return animals;
  }
  const { specie: name, sex } = animal;
  if (sex === undefined) {
    const findBySpicie = data.species.find((spicieName) => spicieName.name === name);
    return findBySpicie.residents.length;
  }
  const findBySpecieEGender = data.species.find((specieName) => specieName.name === name
  .residents.filter((gender) => gender.sex === sex);
  return findBySpecieEGender.length;
}

module.exports = countAnimals;
