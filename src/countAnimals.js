const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const allAnimals = (acc, curr) => Object.assign(acc, { [curr.name]: curr.residents.length });
function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    return species.reduce(allAnimals, {});
  }
  const indicatedSpecies = species.find((specie) => specie.name === animal.specie);
  if (animal.specie && animal.sex) {
    const indicatedSex = indicatedSpecies.residents
      .filter((specieBySex) => specieBySex.sex === animal.sex);
    return indicatedSex.length;
  }
  return indicatedSpecies.residents.length;
}
console.log(countAnimals({ specie: 'bears' }));
module.exports = countAnimals;
