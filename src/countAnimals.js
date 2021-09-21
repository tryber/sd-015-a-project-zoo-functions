const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (animal === undefined) {
    const speciesReport = species.reduce((acc, specie) =>
      Object.assign(acc, { [specie.name]: specie.residents.length }), {});
    return speciesReport;
  }
  const specieReport = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.gender === undefined) {
    return specieReport.length;
  }
  const genderReport = specieReport.filter((resident) => resident.sex === animal.gender);
  console.log(specieReport);
  return genderReport.length;
}
module.exports = countAnimals;
