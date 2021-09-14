const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// IF THERE IS NO ARGUMENT
const noArguments = () => {
  const result = {};
  species.forEach((specie) => {
    result[specie.name] = specie.residents.length;
  });
  return result;
};

// MAIN FUNCTION
function countAnimals(animal) {
  if (!animal) return noArguments();

  if (Object.keys(animal).length === 1) {
    return species
      .find((specie) => specie.name === animal.specie).residents.length;
  }

  return species
    .find((specie) => specie.name === animal.specie).residents
    .filter((resident) => resident.sex === animal.sex).length;
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'elephants', sex: 'male' }));
