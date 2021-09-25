const data = require('../data/zoo_data');

function resultNameAnimal(localanimal, nomeanimal) {
  const entriesNomeAnimal = Object.entries(nomeanimal);
  const nvArray = {};
  entriesNomeAnimal.forEach((element) => {
    nvArray[element[0]] = element[1];
  });
  console.log(nvArray);
  console.log(localanimal);
}

function nomeAnimaisLocal(animais) {
  //const entriesAnimais = Object.entries(animais);
  const nvResult = {};
  for (let index = 0; index < data.species.length; index += 1) {
    const aaa = data.species[index].name;
    const nvname = [];
    const arrayResidents = data.species[index].residents;
    for (let index1 = 0; index1 < arrayResidents.length; index1 += 1) {
      nvname.push(arrayResidents[index1].name);
    }
    nvResult[aaa] = nvname;
  // console.log(nvResult);
  }
  // return resultNameAnimal(entriesAnimais,nvResult);
  resultNameAnimal(animais, nvResult);
}

function animaisLocal() {
  let arrayLocal = [];
  data.species.forEach((element) => {
    arrayLocal.push(element.location);
  });
  // Remove valores Duplicados do array
  // Fonte:https://www.delftstack.com/pt/howto/javascript/javascript-remove-duplicates-from-an-array/4
  arrayLocal = [...new Set(arrayLocal)];
  const nvResult = {};
  for (let index = 0; index < arrayLocal.length; index += 1) {
    const local = data.species.filter((location) => location.location === arrayLocal[index]);
    const chave = arrayLocal[index];
    const nvname = [];
    for (let index1 = 0; index1 < local.length; index1 += 1) {
      nvname.push(local[index1].name);
    }
    nvResult[chave] = nvname;
  }
  return (nvResult);
}
function getAnimalMap(options) {
  if (options === undefined) {
    return animaisLocal();
  }
  if (options.includeNames) {
    return nomeAnimaisLocal(animaisLocal());
  }
}

getAnimalMap({ includeNames: true });
module.exports = getAnimalMap;
