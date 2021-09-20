const data = require('../data/zoo_data');

const path = data.species;

function countAnimals(animal) {
  if (!animal) {
    const red = (acc, cur) => ({ ...acc, [cur.name]: cur.residents.length });
    return path.reduce(red, {});
    // usei como inspiração função reduce de vídeo
    // link: https://www.youtube.com/watch?v=cVx-nMahAjk
  }
  const findAnimal = path.find((el) => el.name === animal.specie);
  if (findAnimal && animal.sex === undefined) {
    return findAnimal.residents.length;
  } return findAnimal.residents.filter((el) => el.sex === animal.sex).length;
}

console.log(countAnimals());

module.exports = countAnimals;
