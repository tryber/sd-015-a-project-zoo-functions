const data = require('../data/zoo_data');

function filtrarSexo(animais, qualSexo) {
  const objetos = qualSexo === undefined ? animais : animais.filter((algum) => {
    const retorno = algum.sex === qualSexo;
    return retorno;
  });
  return objetos.map((animal) => animal.name);
}

function mostrarTodosOsBichos(listaDeAnimais, opicoes) {
  return listaDeAnimais.map((elemento) => {
    const animalSelecionado = data.species.find((especie) => especie.name === elemento).residents;
    const animaisResidentes = filtrarSexo(animalSelecionado, opicoes.sex);
    if (opicoes.sorted) {
      animaisResidentes.sort();
    }
    const resposta = {};
    resposta[elemento] = animaisResidentes;
    return resposta;
  });
}

function animalPorLocal(local, opicoes) {
  let resposta;
  const animaisLocais = data.species.filter((animal) => {
    const retornoFilter = animal.location === local;
    return retornoFilter;
  }).map((animal) => animal.name);
  if (opicoes !== undefined && opicoes.includeNames === true) {
    resposta = mostrarTodosOsBichos(animaisLocais, opicoes);
  } else {
    resposta = animaisLocais;
  }
  return resposta;
}

function acharTodosLocais() {
  return data.species.reduce((locais, bixo) => {
    const retornoReduce = locais.includes(bixo.location) ? locais : `${locais}${bixo.location};`;
    return retornoReduce;
  }, '').split(';').slice(0, -1);// Usei slice, porque o pop() não funcionou;
}

function getAnimalMap(options) {
  const resposta = {};
  const locais = acharTodosLocais();
  locais.forEach((local) => {
    resposta[local] = animalPorLocal(local, options);
  });
  return resposta;
}

module.exports = getAnimalMap;
