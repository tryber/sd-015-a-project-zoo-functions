const data = require('../data/zoo_data');

function gerarresultado(animais, nomeEspecie) {
  const registro = { NE: [], NW: [], SE: [], SW: [] };
  animais.NE.forEach((element) => {
    registro.NE.push({ [element]: nomeEspecie[element] });
  });
  animais.NW.forEach((element) => {
    registro.NW.push({ [element]: nomeEspecie[element] });
  });
  animais.SE.forEach((element) => {
    registro.SE.push({ [element]: nomeEspecie[element] });
  });
  animais.SW.forEach((element) => {
    registro.SW.push({ [element]: nomeEspecie[element] });
  });
  return registro;
}
function ordenarName(ordem, param) {
  if (ordem) param.sort();
  return param;
}
function nomeAnimalLocal(animais, ordem, sexo) {
  const nvResult = {};
  data.species.forEach((element) => {
    const nvName = [];
    element.residents.forEach((nomeAnimal) => {
      if (sexo === undefined) nvName.push(nomeAnimal.name);
      if ((sexo !== undefined) && (sexo === nomeAnimal.sex)) nvName.push(nomeAnimal.name);
    });
    nvResult[element.name] = nvName;
    // if (ordem) nvResult[element.name].sort();
    nvResult[element.name] = ordenarName(ordem, nvResult[element.name]);
  });
  return gerarresultado(animais, nvResult);
}

function animaisLocal(ordem, sexo) {
  let arrayLocal = [];
  data.species.forEach((element) => {
    arrayLocal.push(element.location);
    // Remove valores Duplicados do array
    // Fonte:https://www.delftstack.com/pt/howto/javascript/javascript-remove-duplicates-from-an-array/4
    arrayLocal = [...new Set(arrayLocal)];
  });
  const nvResult = {};
  arrayLocal.forEach((element1) => {
    const local = data.species.filter((location) => location.location === element1);
    const nvname = [];
    local.forEach((localName) => {
      nvname.push(localName.name);
    });
    nvResult[element1] = nvname;
  });
  return nvResult;
}

function getAnimalMap(options) {
  if (options === undefined) {
    return animaisLocal();
  }
  if (options.includeNames) {
    return nomeAnimalLocal(animaisLocal(), options.sorted, options.sex);
  }
  if (!options.includeNames) {
    return animaisLocal(options.sorted, options.sex);
  }
}
getAnimalMap({ includeNames: true });

module.exports = getAnimalMap;
