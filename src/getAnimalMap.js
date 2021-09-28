const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// repositorio do Luan Vitor consultado para fazer esse requesito - https://github.com/tryber/sd-015-a-project-zoo-functions/pull/2/files
// separa ou não os nomes por sexo e adiciona num array os de mesmo sexo
// pega o nome de cada um dos resident e adiciona no array localGroup
function separaOuNao(group, resident, sex) {
  let localGroup = group;
  if (sex === false) {
    localGroup = [...group, resident.name];
    return localGroup;
  }
  if (resident.sex === sex) {
    localGroup = [...group, resident.name];
    return localGroup;
  }
  return localGroup;
}

function getName(sex, residents) {
  return residents.reduce((group, resident) => {
    // com os nomes adicionados ao array com a função separaOuNao, vai para nomesSeparadosOuNao
    const nomesSeparadosOuNao = separaOuNao(group, resident, sex);
    return nomesSeparadosOuNao;
  }, []);
}
// ordena ou não dependendo da sorted
function objeOrdena(listaComresidentes, sorted) {
  if (sorted) {
    return listaComresidentes.sort();
  }
  return listaComresidentes;
}

function getLocation(includeNames, sorted, sex) {
  return species.reduce((acc, { name, location, residents }) => {
    if (includeNames) {
      let listaComresidentes = getName(sex, residents);
      // so ordena nos casos de includeNames ser true
      listaComresidentes = objeOrdena(listaComresidentes, sorted);
      // adiciona ao acc NE,NW,SE,SW (acc[location]) - objeto name: residents
      acc[location] = [...acc[location], { [name]: listaComresidentes }];
      return acc;
    }
    // caso includesNames = true so adiciona o name do curl
    acc[location].push(name);
    return acc;
  }, { NE: [], NW: [], SE: [], SW: [] });
}
function getAnimalMap({ includeNames = false, sorted = false, sex = false } = {}) {
  return getLocation(includeNames, sorted, sex);
}

module.exports = getAnimalMap;
