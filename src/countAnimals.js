const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// código do José Carlos(Zeka) usado para fazer essa parte- encurtador.com.br/EFH48
function countAnimals(animal) {
  const animals = {};
  if (animal === undefined) {
    species.forEach(({ name, residents }) => { animals[name] = residents.length; });
    return animals;
  }
  const totalEspecie = species.find((specie) => specie.name === animal.specie).residents;
  if (animal.gender) {
    return totalEspecie.filter((specieToSex) => specieToSex.sex === animal.gender).length;
  }
  return totalEspecie.length;
}

module.exports = countAnimals;
