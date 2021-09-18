const data = require('../data/zoo_data');
// A função é responsável pelo mapeamento geográfico das espécies e seus animais, podendo ainda filtrá-los por ordem alfabética e gênero.

// Observações técnicas

// Analise o teste unitário para entender os retornos que são esperados para esta função.
// O que será avaliado

// Sem parâmetros, retorna animais categorizados por localização;
// Com a opção includeNames: true especificada, retorna nomes de animais;
// Com a opção sorted: true especificada, retorna nomes de animais ordenados;
// Com a opção sex: 'female' ou sex: 'male' especificada, retorna somente nomes de animais macho/fêmea;
// Com a opção sex: 'female' ou sex: 'male' especificada e a opção sort: true especificada, retorna somente nomes de animais macho/fêmea com os nomes dos animais ordenados;
// Só retorna informações ordenadas e com sexo se a opção includeNames: true for especificada.

const animalLocation = {
  NE: data.species.filter((e) => e.location === 'NE').reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []),
  NW: data.species.filter((e) => e.location === 'NW').reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []),
  SE: data.species.filter((e) => e.location === 'SE').reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []),
  SW: data.species.filter((e) => e.location === 'SW').reduce((acc, curr) => {
    acc.push(curr.name);
    return acc;
  }, []),
};

const createObjectAnimalAndName = (parameter) => {
  const name = data.species.filter((e) => e.location.includes(parameter))
    .filter((i) => i.residents.map((x) => x.name));
  const obj = name.reduce((arr, curr) => {
    const result = {};
    result[curr.name] = curr.residents.map((y) => y.name);
    arr.push(result);
    return arr;
  }, []);
  return obj;
};

const getAnimalMapIfIncludeNames = () => {
  let result = {};
  const objectWithInitialsLocations = Object.keys(animalLocation).reduce((location, initials) => {
    result = location;
    result[initials] = createObjectAnimalAndName(initials);
    return result;
  }, {});
  return objectWithInitialsLocations;
};

const sortAnimal = (parameter) => {
  const names = data.species.filter((e) => e.location.includes(parameter))
    .filter((i) => i.residents.map((x) => x.name));
  const obj = names.reduce((arr, curr) => {
    const teste = {};
    teste[curr.name] = curr.residents.map((y) => y.name).sort();
    arr.push(teste);
    return arr;
  }, []);
  return obj;
};

const sortedAnimalName = () => {
  let result = {};
  const sortedAnimal = Object.keys(animalLocation).reduce((location, initials) => {
    result = location;
    result[initials] = sortAnimal(initials).sort();
    return result;
  }, {});
  return sortedAnimal;
};

const getAnimalByGender = (parameter, genders) => {
  const gender = data.species.filter((e) => e.location.includes(parameter))
    .filter((i) => i.residents.map((x) => x.name));
  const obj = gender.reduce((arr, curr) => {
    const teste = {};
    teste[curr.name] = curr.residents.filter((y) => y.sex === genders).map((x) => x.name);
    arr.push(teste);
    return arr;
  }, []);
  return obj;
};

const animalByGender = (genders) => {
  let result = {};
  const animalGender = Object.keys(animalLocation).reduce((location, initials) => {
    result = location;
    result[initials] = getAnimalByGender(initials, genders);
    return result;
  }, {});
  return animalGender;
};

const genderAndSorted = (parameter, genders) => {
  const gender = data.species.filter((e) => e.location.includes(parameter))
    .filter((i) => i.residents.map((x) => x.name));
  const obj = gender.reduce((arr, curr) => {
    const teste = {};
    teste[curr.name] = curr.residents.filter((y) => y.sex === genders).map((x) => x.name).sort();
    arr.push(teste);
    return arr;
  }, []);
  console.log(obj);
  return obj;
};

const sortedGender = (genders) => {
  const animalGender = Object.keys(animalLocation).reduce((location, initials) => {
    let result = location;
    result[initials] = genderAndSorted(initials, genders);
    return result;
  }, {});
  return animalGender;
};

function verify1(includeNames, sorted, sex) {
  if (includeNames && sorted && sex) {
    return sortedGender(sex);
  }
}

function verify2(includeNames, sex) {
  if (typeof includeNames === 'undefined' && sex) return animalLocation;
  if (sex) return animalByGender(sex);
}

function verify3(includeNames, sorted) {
  if (includeNames && sorted) return sortedAnimalName();
  if (includeNames) return getAnimalMapIfIncludeNames();
}

// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/7/commits/1400152f7e70a76988e2e549b364e6e62fcf80da
function getAnimalMap(options) {
  if (!options) return animalLocation;
  const { includeNames, sorted, sex } = options;
  const ver1 = verify1(includeNames, sorted, sex);
  const ver2 = verify2(includeNames, sex);
  const ver3 = verify3(includeNames, sorted);
  if (ver1) return ver1;
  if (ver2) return ver2;
  if (ver3) return ver3;
}

getAnimalMap({ includeNames: true, sex: 'female', sorted: true });
module.exports = getAnimalMap;
