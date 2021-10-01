const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function location() {
  const ne = species.filter((element) => element.location === 'NE').map((element) => element.name);
  const nw = species.filter((element) => element.location === 'NW').map((element) => element.name);
  const se = species.filter((element) => element.location === 'SE').map((element) => element.name);
  const sw = species.filter((element) => element.location === 'SW').map((element) => element.name);
  return { NE: ne, NW: nw, SE: se, SW: sw };
}

function name() {
  return (species.reduce((objFinal1, specie) => {
    const objFinal = { ...objFinal1 };
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

function sorted() {
  return (species.reduce((objFinal1, specie) => {
    const objFinal = { ...objFinal1 };
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

function sexMaleOrFemale(param) {
  return (species.reduce((objFinal1, specie) => {
    const objFinal = { ...objFinal1 };
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .filter((element) => element.sex === param)
        .map((nomesDosAnimais) => nomesDosAnimais.name) }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .filter((element) => element.sex === param)
        .map((nomesDosAnimais) => nomesDosAnimais.name) });
    }
    return objFinal;
  }, {}));
}

function sexMaleOrFemaleSorted(param) {
  return (species.reduce((objFinal1, specie) => {
    const objFinal = { ...objFinal1 };
    if (objFinal[specie.location] === undefined) {
      objFinal[specie.location] = [{ [specie.name]: specie.residents
        .filter((element) => element.sex === param)
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() }];
      return objFinal;
    }
    if (objFinal[specie.location] !== undefined) {
      objFinal[specie.location].push({ [specie.name]: specie.residents
        .filter((element) => element.sex === param)
        .map((nomesDosAnimais) => nomesDosAnimais.name).sort() });
    }
    return objFinal;
  }, {}));
}

function sexSortedOrNot(sex, sort) {
  if (sort) {
    return sexMaleOrFemaleSorted(sex);
  }
  return sexMaleOrFemale(sex);
}

function nameSortedOrNot(sort) {
  if (sort) {
    return sorted();
  }
  return name();
}

function getAnimalMap(options = {}) {
  if (options.includeNames === true && options.sex) {
    return sexSortedOrNot(options.sex, options.sorted);
  }
  if (options.includeNames === true) {
    return nameSortedOrNot(options.sorted);
  }
  return location();
}

getAnimalMap();
module.exports = getAnimalMap;
