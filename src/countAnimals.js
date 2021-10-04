const data = require('../data/zoo_data');

function countAnimals(animal) {
  // seu código aqui
  if (!animal) {
    const countResidents = {};
    data.species.forEach(({ name, residents }) => {
      countResidents[name] = residents.length;
    });
    return countResidents;
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
