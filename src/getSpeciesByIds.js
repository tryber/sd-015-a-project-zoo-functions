const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const getSpeciesByIds = (...item) => species.filter(({ id }) => item.includes (id));

module.exports = getSpeciesByIds;

// https://www.youtube.com/watch?v=bdLkAm12pgI
//mentorias, Git Pedro Guariza