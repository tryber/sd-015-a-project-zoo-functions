const data = require('../data/zoo_data');

const { species } = data;

function getAnimalMap(options) {
  // seu código aqui
}

function listaTodasEspecies() {
  const objetoPadrão = {
    NE: species.filter((infoGeral) =>
      infoGeral.location.includes('NE')).map((especie) => especie.name),
    NW: species.filter((infoGeral) =>
      infoGeral.location.includes('NW')).map((especie) => especie.name),
    SE: species.filter((infoGeral) =>
      infoGeral.location.includes('SE')).map((especie) => especie.name),
    SW: species.filter((infoGeral) =>
      infoGeral.location.includes('SW')).map((especie) => especie.name),
  };
  return objetoPadrão;
}

function listaTodasEspecieseNome() {
  const listaEspecies = listaTodasEspecies();

  const objetoResultado = listaEspecies.NE.map((elemento) => {
    return {elemento}
  });
  return objetoResultado
}

module.exports = getAnimalMap;
