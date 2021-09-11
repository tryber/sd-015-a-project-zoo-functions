const data = require('../data/zoo_data');

function filtrarSexo(objeto, qualSexo) {
  let resposta = objeto;
  if (objeto !== undefined) {
    resposta = objeto.filter((animal) => animal.sex === qualSexo);
  }
  return resposta;
}

function nomesDosBixin(listaDosBixin, opicoes) {
  return listaDosBixin.map((elemento) => {
    const objetoSelecionado = data.species.find((especie) => especie.name === elemento);
    let filtro = objetoSelecionado.residents;
    if (opicoes.sex !== undefined) {
      filtro = filtrarSexo(filtro, opicoes.sex);
    }
    const animaisResidentes = filtro.map((animal) => animal.name);
    if (opicoes.sorted === true) {
      animaisResidentes.sort();
    }
    const resposta = {};
    resposta[elemento] = animaisResidentes;
    return resposta;
  });
}

function acharLocal(local, opicoes) {
  let resposta;
  const animaisin = data.species.filter((bissin) => bissin.location === local);
  const locais = animaisin.map((bixin) => bixin.name);
  if (opicoes !== undefined && opicoes.includeNames === true) {
    resposta = nomesDosBixin(locais, opicoes);
  } else {
    resposta = locais;
  }
  return resposta;
}

function getAnimalMap(options) {
  const resposta = {
    NE: acharLocal('NE', options),
    NW: acharLocal('NW', options),
    SE: acharLocal('SE', options),
    SW: acharLocal('SW', options),
  };
  return resposta;
}

module.exports = getAnimalMap;
