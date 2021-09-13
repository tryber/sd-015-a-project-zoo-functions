const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data;
  if (!animal) {
    return data.species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const especie = species.find((bicho) => bicho.name === animal.specie);
  if (animal.specie && animal.gender) {
    const wGender = especie.residents.filter((bicho) => bicho.sex === animal.gender);
    return wGender.length;
  }
  return especie.residents.length;
}

module.exports = countAnimals;
