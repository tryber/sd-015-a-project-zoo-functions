const data = require('../data/zoo_data');

function countAnimals(animal) {
  if (animal === undefined) {
    // src: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/9/commits/cf2a2fcf63d54ea9fc19837bb7eb857f0f1a8b9b
    // precisava ver como retornar um array de forma correta
    const allAnimal = {};
    data.species.forEach((specie) => {
      allAnimal[specie.name] = specie.residents.length;
    });
    return allAnimal;
  } if (animal.sex === undefined) {
    const filterName = data.species.find((specie) => specie.name === animal.specie);
    return filterName.residents.length;
  }
  {
    const filterName = data.species.find((specie) => specie.name === animal.specie);
    const filterSex = filterName.residents.filter((resident) => resident.sex === animal.sex);
    return filterSex.length;
  }
}

module.exports = countAnimals;

console.log(countAnimals({ specie: 'bears', sex: 'female' }));
