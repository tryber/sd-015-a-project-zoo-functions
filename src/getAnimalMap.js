const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function name(param) {
  const x = [];
  for (let index = 0; index < param.length; index += 1) {
    species.filter((element) => element.name === param[index])
      .reduce((acc, curr) => {
        const array = [];
        for (let index2 in curr.residents) {
          array.push(curr.residents[index2].name);
        }
        (acc[param[index]] = array);
        x.push(acc);
        return acc;
      }, {});
  }
  return x;
}

console.log(species.reduce((objFinal, specie) => {
  objFinal[specie.location] = { [specie.name]:specie.residents.map((nomesDosAnimais) => nomesDosAnimais.name).sort() };
  return objFinal;
}, {}));


function sorted(param) {
  const x = [];
  for (let index = 0; index < param.length; index += 1) {
    species.filter((element) => element.name === param[index])
      .reduce((acc, curr) => {
        const array = [];
        for (let index2 in curr.residents) {
          array.push(curr.residents[index2].name);
        }
        (acc[param[index]] = array.sort());
        x.push(acc);
        return acc;
      }, {});
  }
  return x;
}

function sex(param) {
  console.log(species.map((element) => element.residents.map((resident) => resident.sex)));
}

function getAnimalMap(...options) {
  const ne = species.filter((element) => element.location === 'NE').map((element) => element.name);
  const nw = species.filter((element) => element.location === 'NW').map((element) => element.name);
  const se = species.filter((element) => element.location === 'SE').map((element) => element.name);
  const sw = species.filter((element) => element.location === 'SW').map((element) => element.name);
  if (!options[0]) {
    return { NE: ne, NW: nw, SE: se, SW: sw };
  }
  if (options[0].includeNames === true && options[0].sorted === true) {
    const obj = { NE: sorted(ne), NW: sorted(nw), SE: sorted(se), SW: sorted(sw) };
    return obj;
  }
  if (options[0].includeNames === true && options[0].sex=== 'male') {
    return species.filter((element) => element.residents[1] === 'male').map((element) => element.name);
  }
  if (options[0].includeNames === true && options[0].sex=== 'female') {
    return species.filter((element) => console.log(element.residents)).map((element) => element.name);
  }
  if (options[0].includeNames === true) {
    const obj = { NE: name(ne), NW: name(nw), SE: name(se), SW: name(sw) };
    return obj;
  }
}
const options = { includeNames: true, sorted: true };
// sex();
// console.log(getAnimalMap(options));
module.exports = getAnimalMap;
