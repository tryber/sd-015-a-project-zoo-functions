const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const employResponsible = data.employees.find((obj) => obj.id === id).responsibleFor[0];
  const specie = data.species.find((obj) => employResponsible.includes(obj.id)).residents;
  const older = specie.reduce((prev, current) => ((prev.age > current.age) ? prev : current)); // adaptado de https://stackoverflow.com/questions/4020796/finding-the-max-value-of-an-attribute-in-an-array-of-objects
  return Object.values(older);
}

module.exports = getOldestFromFirstSpecies;
