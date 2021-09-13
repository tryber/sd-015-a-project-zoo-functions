const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  return data.species
    .find((specie) => specie.name === animal).residents // Através do find retorna o primeiro objeto (dentro de espécies) em que o nome da espécie seja igual ao parâmetro.
    .every((specieAge) => specieAge.age >= age); // Every vai percorrer todo o array (resident) da especie retornada e verificar se o parametro corresponde com a idade mínima estabelecida.
}
module.exports = getAnimalsOlderThan;
