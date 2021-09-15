const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

// funcao q separa os sexos caso o param seja true
function sexo(group, resident, sex) {
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
// imprime os names e separa por sexo caso o parametro seja true
function getName(sex, residents) {
  return residents.reduce((group, resident) => {
    const localGrup = sexo(group, resident, sex);
    return localGrup;
  }, []);
}
// funcao que sorteia o array caso o parametro seja true
function sortDeclared(residentList, sort) {
  return (sort) ? residentList.sort() : residentList;
}

function getLocation(includeNames, sort, sex) {
  // no reduce abaixo eu primeiro desestrututo o elemento atual do reduce
  // caso includeNames exista(seja true)
  // crio uma let chamando a funcao que retorna o nome dos animais
  // dpois chamo a funcao para organizar os nomes em ordem alfabetica
  return species.reduce((acc, { name, location, residents }) => {
    if (includeNames) {
      let residentList = getName(sex, residents);
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

module.exports = getAnimalMap;
