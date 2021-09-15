const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    return data.species.reduce((acc, { name, residents }) => {
      Object.assign(acc, { [name]: residents.length });
      return acc;
    }, {});
  }

  const { specie, gender } = animal;
  if (!gender) {
    return data.species.find((element) => element.name === specie).residents
      .length;
  }
  return data.species
    .find((element) => element.name === specie)
    .residents.filter((element) => element.sex === gender).length;
}

module.exports = countAnimals;
