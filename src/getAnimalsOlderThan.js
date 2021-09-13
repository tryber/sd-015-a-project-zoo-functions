const data = require('../data/zoo_data');

// retorna a espécie referente ao nome
const filterEspecie = (especie) => data.species.find((elemento) => elemento.name === especie);

const getAnimalsOlderThan = (animal, age) =>
  (filterEspecie(animal).residents.every((elemento) => elemento.age > age));

module.exports = getAnimalsOlderThan;
