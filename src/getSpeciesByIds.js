const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => ids.reduce((animalArray, id)) => 
animalArray.concat(species.find((animal) => animal.id === id), []);

module.exports = getSpeciesByIds;