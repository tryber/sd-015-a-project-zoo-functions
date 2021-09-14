const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  if (ids.length === 0) {
    return [];
  }

  const selectedSepecies = ids.map((id) => {
    const filteredSpecies = data.species.filter((specie) => specie.id === id);
    return filteredSpecies;
  });

  const finalResult = selectedSepecies.map((specie) => specie[0]);
  return finalResult;
}

/* console.log(
  getSpeciesByIds(
    "0938aa23-f153-4937-9f88-4858b24d6bce",
    "e8481c1d-42ea-4610-8e11-1752cfc05a46"
  )
);
 */
module.exports = getSpeciesByIds;
