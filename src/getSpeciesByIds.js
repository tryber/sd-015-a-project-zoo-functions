const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  const arraySpecies = [];
  if (ids.length === 0) {
    return [];
  }
  ids.forEach((idDaEspecie) => {
    data.species.forEach((objetoEspecie) => {
      if (objetoEspecie.id === idDaEspecie) {
        arraySpecies.push(objetoEspecie);
      }
    });
  });
  console.log(arraySpecies);
  return arraySpecies;
}

module.exports = getSpeciesByIds;
