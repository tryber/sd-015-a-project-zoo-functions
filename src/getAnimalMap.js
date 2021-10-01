const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function location() {
  const ne = species.filter((element) => element.location === 'NE').map((element) => element.name);
  const nw = species.filter((element) => element.location === 'NW').map((element) => element.name);
  const se = species.filter((element) => element.location === 'SE').map((element) => element.name);
  const sw = species.filter((element) => element.location === 'SW').map((element) => element.name);
  return { NE: ne, NW: nw, SE: se, SW: sw };
}

function name(param) {
  return (species.reduce((objFinal, specie) => {
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .map((nomesDosAnimais) => nomesDosAnimais.name) }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .map((nomesDosAnimais) => nomesDosAnimais.name) });
    }
    return objFinal;
  }, {}));
}

function sorted(param) {
  return (species.reduce((objFinal, specie) => {
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() });
    }
    return objFinal;
  }, {}));
}

function sexFemale() {
  return (species.reduce((objFinal, specie) => {
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .filter((element) => element.sex === 'female')
        .map((nomesDosAnimais) => nomesDosAnimais.name) }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .filter((element) => element.sex === 'female')
        .map((nomesDosAnimais) => nomesDosAnimais.name) });
    }
    return objFinal;
  }, {}));
}

function sexMale() {
  return (species.reduce((objFinal, specie) => {
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .filter((element) => element.sex === 'male')
        .map((nomesDosAnimais) => nomesDosAnimais.name) }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .filter((element) => element.sex === 'male')
        .map((nomesDosAnimais) => nomesDosAnimais.name) });
    }
    return objFinal;
  }, {}));
}
function sexFemaleSorted() {
  return (species.reduce((objFinal, specie) => {
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .filter((element) => element.sex === 'female')
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .filter((element) => element.sex === 'female')
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() });
    }
    return objFinal;
  }, {}));
}

function sexMaleSorted() {
  return (species.reduce((objFinal, specie) => {
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .filter((element) => element.sex === 'male')
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .filter((element) => element.sex === 'male')
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() });
    }
    return objFinal;
  }, {}));
}

function getAnimalMap(...options) {
  if (!options[0] || options[0].includeNames !== true) { return location(); }
  if (options[0].includeNames === true && options[0].sex === 'female' && options[0]
    .sorted === true) { return sexFemaleSorted(); }
  if (options[0].includeNames === true && options[0].sex === 'male' && options[0]
    .sorted === true) { return sexMaleSorted(); }
  if (options[0].includeNames === true && options[0].sorted === true) { return sorted(); }
  if (options[0].includeNames === true && options[0].sex === 'male') { return sexMale(); }
  if (options[0].includeNames === true && options[0].sex === 'female') { return sexFemale(); }
  if (options[0].includeNames === true) { return name(); }
  if (options[0].sex === 'male' && sorted === true) { return sexMaleSorted(); }
}

getAnimalMap();
module.exports = getAnimalMap;
