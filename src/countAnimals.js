const data = require('../data/zoo_data');

const acharEspecie = (bicho) => data.species.find((bixinho) => bixinho.name === bicho);

function filtroGenero(especieSexo) {
  let resposta;
  const animais = acharEspecie(especieSexo.specie).residents;
  if (especieSexo.sex !== undefined) {
    resposta = animais.filter((animal) => animal.sex === especieSexo.sex);
  } else {
    resposta = animais;
  }
  return resposta.length;
}

function countAnimals(bissin) {
  let resposta = {};
  if (bissin === undefined) {
    data.species.forEach((especie) => {
      resposta[especie.name] = acharEspecie(especie.name).residents.length;
    });
  } else {
    resposta = filtroGenero(bissin);
  }
  return resposta;
}

module.exports = countAnimals;
