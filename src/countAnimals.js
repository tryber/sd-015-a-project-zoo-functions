const { species } = require('../data/zoo_data');

const findAnimalByName = (specie) => species.find(({ name }) => name === specie);

const filterAnimalsBySex = (animalObj, gender) =>
  animalObj.residents.filter(({ sex }) => sex === gender);

const countAnimals = ({ specie = false, sex = false } = {}) => {
  if (sex) return filterAnimalsBySex(findAnimalByName(specie), sex).length;
  if (specie) return findAnimalByName(specie).residents.length;

  return species.reduce((acc, { name, residents }) => ({ ...acc, [name]: residents.length }), {});
  // https://stackoverflow.com/questions/11508463/javascript-set-object-key-by-variable
};

module.exports = countAnimals;
