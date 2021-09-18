const data = require('../data/zoo_data');

const ne = data.species.filter((search) => search.location === 'NE');
const nw = data.species.filter((search) => search.location === 'NW');
const se = data.species.filter((search) => search.location === 'SE');
const sw = data.species.filter((search) => search.location === 'SW');

const localizaçãoAnimais = () => {
  const local = {
    NE: ne.map((search) => search.name),
    NW: nw.map((search) => search.name),
    SE: se.map((search) => search.name),
    SW: sw.map((search) => search.name),
  };
  return local;
};

const getNames = (specie, lista) => {
  const retNameResidents = [];
  for (let i = 0; specie.length > i; i += 1) {
    const objName = {};
    objName[specie[i]] = lista.map((search) => search.residents.map((animal) => animal.name))[i];
    retNameResidents.push(objName);
  }
  return retNameResidents;
};

const nameTrue = (names) => {
  const retornoNameTrue = {
    NE: getNames(names.NE, ne),
    NW: getNames(names.NW, nw),
    SE: getNames(names.SE, se),
    SW: getNames(names.SW, sw),
  };
  return retornoNameTrue;
};

function ll(l, gender) {
  return l.map((sE) => sE.residents.filter((el) => el.sex === gender).map((an) => an.name));
}

const getNamesAndSex = (spec, lista, gender) => {
  const retNameResidentsAndSex = [];
  for (let i = 0; spec.length > i; i += 1) {
    const objG = {};
    objG[spec[i]] = ll(lista, gender)[i];
    retNameResidentsAndSex.push(objG);
  }
  return retNameResidentsAndSex;
};

const sexTrue = (names, sex) => {
  const retornoNameTrue = {
    NE: getNamesAndSex(names.NE, ne, sex),
    NW: getNamesAndSex(names.NW, nw, sex),
    SE: getNamesAndSex(names.SE, se, sex),
    SW: getNamesAndSex(names.SW, sw, sex),
  };
  return retornoNameTrue;
};

const sortedIt = (lnames) => {
  lnames.NE.forEach((element) => Object.values(element)[0].sort());
  lnames.NW.forEach((element) => Object.values(element)[0].sort());
  lnames.SE.forEach((element) => Object.values(element)[0].sort());
  lnames.SW.forEach((element) => Object.values(element)[0].sort());
  return lnames;
};

const cond1 = (options) => {
  let r = false;
  if (options.length === 0 || (options[0].sex === 'female' && options[0].includeNames !== true)) {
    r = true;
  } else {
    r = false;
  }
  return r;
};

const cond2 = (options) => {
  let r = false;
  if (options[0].sex !== undefined && options[0].includeNames && options[0].sorted) {
    r = true;
  } else {
    r = false;
  }
  return r;
};

const cond3 = (options) => {
  let r = false;
  if (options[0].includeNames && options[0].sorted) {
    r = true;
  } else {
    r = false;
  }
  return r;
};

const cond4 = (options) => {
  let r = false;
  if (options[0].sex !== undefined && options[0].includeNames) {
    r = true;
  } else {
    r = false;
  }
  return r;
};

const ses = (options) => {
  let reto = {};
  if (cond3(options)) {
    reto = sortedIt(nameTrue(localizaçãoAnimais()));
  } else if (cond4(options)) {
    reto = sexTrue(localizaçãoAnimais(), options[0].sex);
  } else if (options[0].includeNames) {
    reto = nameTrue(localizaçãoAnimais());
  }
  return reto;
};

const getAnimalMap = (...options) => {
  let retorno = {};
  if (cond1(options)) {
    retorno = localizaçãoAnimais();
  } else if (cond2(options)) {
    retorno = sortedIt(sexTrue(localizaçãoAnimais(), options[0].sex));
  } else { retorno = ses(options); }
  return retorno;
};

module.exports = getAnimalMap;
