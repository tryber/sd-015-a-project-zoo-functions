const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allAnimals = (acc, curr) => Object.assign(acc, { [curr.name]: curr.residents.length });
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce(allAnimals, {});
  }
  const indicatedSpecies = species.find((specie) => specie.name === animal.specie);
  if (animal.specie && animal.gender) {
    const indicatedGender = indicatedSpecies.residents
      .filter((specieByGender) => specieByGender.sex === animal.gender);
      return indicatedGender.length;
  }
  return indicatedSpecies.residents.length;
}
console.log(countAnimals({ specie: 'bears' }));
module.exports = countAnimals;
