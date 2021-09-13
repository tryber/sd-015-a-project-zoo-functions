const data = require('../data/zoo_data');

const acharEspecie = (bicho) => data.species.find((bixinho) => bixinho.name === bicho);

function filtroGenero(especieSexo) {
  let resposta;
  const animais = acharEspecie(especieSexo.specie).residents;
  if (especieSexo.gender !== undefined) {
    resposta = animais.filter((animal) => animal.sex === especieSexo.gender);
  } else {
    resposta = animais;
  }
  return resposta.length;
}

function countAnimals(bissin) {
  let resposta = {};
  if (bissin === undefined) {
    data.species.map((especie) => especie.name).forEach((nome) => {
      resposta[nome] = acharEspecie(nome).residents.length;
    });
  } else {
    resposta = filtroGenero(bissin);
  }
  return resposta;
}

module.exports = countAnimals;
