const data = require('../data/zoo_data');

// consultado o repositorio de alex cubas
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/12/commits/52d0a899afe68fc53467a395e2dd8e45786bbeb7

function countAnimals(animal) {
  if (!animal) {
    const totalAnimals = {};
    data.species.forEach((specie) => {
      totalAnimals[specie.name] = specie.residents.length;
    });
    return totalAnimals;
  }

  const { specie, sex } = animal;

  if (!sex) {
    const searchSpecie = data.species.find((spc) => spc.name === specie);
    return searchSpecie.residents.length;
  }

  const searchSpecie2 = data.species.find((spc) => spc.name === specie);
  const searchSpecie2Sex = searchSpecie2.residents.filter((resident) => resident.sex === sex);
  return searchSpecie2Sex.length;
}

module.exports = countAnimals;
