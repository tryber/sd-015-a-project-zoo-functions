<<<<<<< HEAD
const zoo_data = require('../data/zoo_data');
const data = require('../data/zoo_data');
=======
const data = require("../data/zoo_data");
>>>>>>> e47f2c3b655b20b25c4e2fee2cd30d446bad03c0

function getSpeciesByIds(...ids) {
  // seu código aqui
<<<<<<< HEAD
  if (ids.length === 0) {
    return [];
  }
  const species = data.species;
  //console.log(species);
  const selectedSpecies = species.filter((specie) => {
    for (let i = 0; i < ids.length; i++) {
      if (specie.id === ids[i]) {
        return specie;
      }
    }
  });
  return selectedSpecies;
=======
  //
>>>>>>> e47f2c3b655b20b25c4e2fee2cd30d446bad03c0
}

// console.log(getSpeciesByIds());
console.log(
  getSpeciesByIds(
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'
  )
);

module.exports = getSpeciesByIds;
