const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return species.reduce((acc, element) => {
      acc[element.name] = element.residents.length;
      return acc;
    }, {});
  }
  if (!animal.gender) {
    const encontrando = species.find((element) => element.name === animal.specie);
    const residentes = encontrando.residents.length;
    return residentes;
  }
  const encontrando = species.find((element) => element.name === animal.specie).residents;
  const encontrandoSexo = encontrando.filter((element) => element.sex === animal.gender);
  const residentes = encontrandoSexo.length;
  return residentes;
}
module.exports = countAnimals;
