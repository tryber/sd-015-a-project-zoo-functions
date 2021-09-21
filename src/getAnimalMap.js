const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// pegando localização
const ne = species.filter((element) => element.location === 'NE');
const nw = species.filter((element) => element.location === 'NW');
const se = species.filter((element) => element.location === 'SE');
const sw = species.filter((element) => element.location === 'SW');

const getLocation = () => ({
  NE: ne.map((value) => value.name),
  NW: nw.map((value) => value.name),
  SE: se.map((value) => value.name),
  SW: sw.map((value) => value.name),
});
// pegando residentes por localização e nome
const namesByLocation = () => ({
  NE: ne.map((element) => ({
    [element.name]: element.residents.map((value) => value.name),
  })),
  NW: nw.map((element) => ({
    [element.name]: element.residents.map((value) => value.name),
  })),
  SE: se.map((element) => ({
    [element.name]: element.residents.map((value) => value.name),
  })),
  SW: sw.map((element) => ({
    [element.name]: element.residents.map((value) => value.name),
  })),
});
// Retornando função acima mas com sort();
const namesByLocationSorted = () => ({
  NE: ne.map((element) => ({
    [element.name]: element.residents.map((value) => value.name).sort(),
  })),
  NW: nw.map((element) => ({
    [element.name]: element.residents.map((value) => value.name).sort(),
  })),
  SE: se.map((element) => ({
    [element.name]: element.residents.map((value) => value.name).sort(),
  })),
  SW: sw.map((element) => ({
    [element.name]: element.residents.map((value) => value.name).sort(),
  })),
});
// Retornando objeto pelo sexo
const femaleOrMale = (sexParam) => ({
  NE: ne.map((element) => ({
    [element.name]: element.residents.filter((value) => value.sex === sexParam).map((y) => y.name),
  })),
  NW: nw.map((element) => ({
    [element.name]: element.residents.filter((value) => value.sex === sexParam).map((y) => y.name),
  })),
  SE: se.map((element) => ({
    [element.name]: element.residents.filter((value) => value.sex === sexParam).map((y) => y.name),
  })),
  SW: sw.map((element) => ({
    [element.name]: element.residents.filter((value) => value.sex === sexParam).map((y) => y.name),
  })),
});
const femaleOrMaleSorted = (sexParam) => ({
  NE: ne.map((elem) => ({
    [elem.name]: elem.residents.filter((value) => value.sex === sexParam).map((y) => y.name).sort(),
  })),
  NW: nw.map((elem) => ({
    [elem.name]: elem.residents.filter((value) => value.sex === sexParam).map((y) => y.name).sort(),
  })),
  SE: se.map((elem) => ({
    [elem.name]: elem.residents.filter((value) => value.sex === sexParam).map((y) => y.name).sort(),
  })),
  SW: sw.map((elem) => ({
    [elem.name]: elem.residents.filter((value) => value.sex === sexParam).map((y) => y.name).sort(),
  })),
});

const includeTrue = (options) => {
  const { includeNames = false, sorted = false, sex = false } = options;
  if (includeNames && !sorted && !sex) {
    return namesByLocation();
  }
};

const includeAndSort = (options) => {
  const { includeNames, sorted, sex } = options;
  if (includeNames && sorted && !sex) {
    return namesByLocationSorted();
  }
};

const includeAndSex = (options) => {
  const { includeNames, sorted, sex } = options;
  if (includeNames && !sorted && sex) {
    return femaleOrMale(sex);
  }
};

const includeSexAndSort = (options) => {
  const { includeNames, sorted, sex } = options;
  if (includeNames && sex && sorted) {
    return femaleOrMaleSorted(sex);
  }
};
// Primeira pensamento mas com muito lint
// const getAnimalMap = (options) => {
//   if (options === undefined) {
//     return getLocation();
//   }
//   includeTrue(options);
//   includeAndSort(options);
//   includeAndSex(options);
//   includeSexAndSort(options);
// };
// Ajuda de Leonardo para refatoração do código
const shootMe = (options) => {
  if (options) {
    let bullet = includeTrue(options);
    bullet = bullet || includeAndSort(options);
    bullet = bullet || includeAndSex(options);
    bullet = bullet || includeSexAndSort(options);
    return bullet;
  }
};
const getAnimalMap = (options) => {
  let result = shootMe(options);
  result = result || getLocation();
  return result;
};

module.exports = getAnimalMap;
