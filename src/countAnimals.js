const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, { name, residents }) => {
      Object.assign(acc, { [name]: residents.length });
      return acc;
    }, {});
  }

  const { specie } = animal;
  if (!specie) {
    return data.species.find((element) => element.name === specie).residents
      .length;
  }
  return data.species
    .find((element) => element.name === specie)
    .residents.filter((element) => element.sex === specie.sex).length;
}

module.exports = countAnimals;
