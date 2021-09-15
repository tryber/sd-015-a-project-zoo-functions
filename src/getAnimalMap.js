const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function sexDeclared(group, resident, sex) {
  let localGroup = group;
  if (!sex) {
    localGroup = [...group, resident.name];
    return localGroup;
  }
  if (resident.sex === sex) {
    localGroup = [...group, resident.name];
    return localGroup;
  }
  return localGroup;
}

function nameDeclared(sex, residents) {
  return residents.reduce((group, resident) => {
    const localGrup = sexDeclared(group, resident, sex);
    return localGrup;
  }, []);
}

function sortDeclared(residentList, sort) {
  return (sort) ? residentList.sort() : residentList;
}

function getLocation(includeNames, sort, sex) {
  // no reduce abaixo eu primeiro desestrututo o elemento atual do reduce
  // caso includeNames exista(seja true)
  // crio uma var chamando a funcao que
  return species.reduce((acc, { name, location, residents }) => {
    if (includeNames) {
      let residentList = nameDeclared(sex, residents);
      residentList = sortDeclared(residentList, sort);
      acc[location] = [...acc[location], { [name]: residentList }];
      return acc;
    }
    acc[location].push(name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalMap({ includeNames = false, sorted = false, sex = false } = {}) {
  return getLocation(includeNames, sorted, sex);
}
getAnimalMap();
// na funcao acima coloco um dafault param para caso nao seja passado nada coloque false nos parametro e chame a funcao com os resultaddo esperado

// exercicio feito com ajuda do repositorio do eric cruz https://github.com/tryber/sd-015-a-project-zoo-functions/pull/124/files

// maneira em q comecei e ficou dificil... decidi recomecar olhando aluings repos
// nas const abaixos eu armazeno o objeto com cada respectiva localizacao
// const ne = species.filter((element) => element.location === 'NE');
// const nw = species.filter((element) => element.location === 'NW');
// const se = species.filter((element) => element.location === 'SE');
// const sw = species.filter((element) => element.location === 'SW');

// // na funcao abaixo ultilizo as const criadas acima para pegar a especie de cada anima
// function getLocation() {
//   return ({
//     NE: ne.map((element) => element.name),
//     NW: nw.map((element) => element.name),
//     SE: se.map((element) => element.name),
//     SW: sw.map((element) => element.name),
//   });
// }

// // uso os objetos de casa loc para criar um novo obj com o nome de cada um dos animais
// function animalNamesByLocation() {
//   return ({
//     NE: ne.map((element) => ({
//       [element.name]: element.residents.map((elemento) => elemento.name),
//     })),
//     NW: nw.map((element) => ({
//       [element.name]: element.residents.map((elemento) => elemento.name),
//     })),
//     SE: se.map((element) => ({
//       [element.name]: element.residents.map((elemento) => elemento.name),
//     })),
//     SW: sw.map((element) => ({
//       [element.name]: element.residents.map((elemento) => elemento.name),
//     })),
//   });
// }

// // funcao onde executo todas as outras
// function getAnimalMap(options) {
//   if (options === undefined) {
//     return getLocation();
//   }
//   const { includeNames } = options;
//   if (includeNames) {
//     return animalNamesByLocation();
//   }
// }

module.exports = getAnimalMap;
