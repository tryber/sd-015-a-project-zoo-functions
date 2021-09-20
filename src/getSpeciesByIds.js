const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// www.youtube.com/watch?v=bdLkAm12pgI, mentorias e Git Pedro Guariza

const getSpeciesByIds = (...item) => species.filter(({ id }) => item.includes(id));

module.exports = getSpeciesByIds;
