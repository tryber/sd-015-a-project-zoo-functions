const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }
  
  const selectedSpecies = data.species.filter((specie) => {
    for (let i = 0; i < ids.length; i += 1) {
      if (specie.id === ids[i]) {
        return specie;
      }
    }
  });
  return selectedSpecies;
}

// console.log(getSpeciesByIds());
console.log(
  getSpeciesByIds(
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    '533bebf3-6bbe-41d8-9cdf-46f7d13b62ae'
  )
);

module.exports = getSpeciesByIds;
