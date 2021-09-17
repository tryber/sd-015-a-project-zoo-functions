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
    const teste = {};
    teste[curr.name] = curr.residents.map((y) => y.name);
    arr.push(teste);
    return arr;
  }, []);
  return obj;
};

const getAnimalMapIfIncludeNames = () => {
  const objectWithInitialsLocations = Object.keys(animalLocation).reduce((location, initials) => {
    location[initials] = createObjectAnimalAndName(initials);
    return location;
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
  const sortedAnimal = Object.keys(animalLocation).reduce((location, initials) => {
    location[initials] = sortAnimal(initials).sort();
    return location;
  }, {});
  return (sortedAnimal);
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
  const animalGender = Object.keys(animalLocation).reduce((location, initials) => {
    location[initials] = getAnimalByGender(initials, genders);
    return location;
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

// NE: [
//   { lions: ['Dee', 'Zena'] },
//   { giraffes: ['Gracia', 'Vicky'] },
// ],
const sortedGender = (genders) => {
  const animalGender = Object.keys(animalLocation).reduce((location, initials) => {
    location[initials] = genderAndSorted(initials, genders);
    return location;
  }, {});
  return animalGender;
};

function getAnimalMap(options) {
  if (!options) return animalLocation;
  const { includeNames, sorted, sex } = options;
  if (sex && typeof includeNames === 'undefined') return animalLocation;
  if ((includeNames) && (sex) && (sorted)) return sortedGender(sex);
  if (sex) return animalByGender(sex);
  if (sorted) return sortedAnimalName();
  if (includeNames && !(sorted)) return getAnimalMapIfIncludeNames();
}

getAnimalMap({ includeNames: true, sex: 'female', sorted: true });
module.exports = getAnimalMap;
