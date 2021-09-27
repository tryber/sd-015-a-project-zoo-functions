const data = require('../data/zoo_data');

const { species } = data;

// function animalsByLocation(options) {
//     return species.reduce((acc, curr) => {
//       const speciesByLocation = species.filter((specie) => specie.location.includes(curr.location)).map((specieFiltered) => specieFiltered.name);
//       acc[curr.location] = speciesByLocation
//       return acc;
//     }, {});
// }
// // console.log(animalsByLocation());

// function teste(param) {
//   const exemplaryByLocation = species.filter((specie) => specie.location === param);
//   // exemplaryByLocation.map((exemplary) => exemplary.residents)
//   // console.log(exemplaryByLocation.residents.map((resident) => resident.name))
//   return exemplaryByLocation.residents.map((resident) => resident.name)
// }
// // console.log(teste('NE'))
// function sortedTrue(options) {

//   return species.reduce((acc, curr) => {
//       if (!acc[curr.location]) {
//         acc[curr.location] = [];
//       }
//       // const array = acc[curr.location]  // -> demonstração mais legível sobre as linhas 31 e 32
//       // const objASerADD = {
//       //   [curr.name]: curr.residents.map((beast) => beast.name),
//       // };
//       acc[curr.location] = options.sorted ? [...acc[curr.location], {
//         [curr.name]: curr.residents.map((beast) => beast.name).sort(),
//       }] : [...acc[curr.location], {
//         [curr.name]: curr.residents.map((beast) => beast.name),
//       }];
//     return acc;
//   }, {});
// }
// // console.log(sortedTrue())

// function optionsHasSex(options) {
//   return species.reduce((acc, curr) => {
//     if (!acc[curr.location]) {
//       acc[curr.location] = [];
//     }
//     // const array = acc[curr.location]  // -> demonstração mais legível sobre as linhas 31 e 32
//     // const objASerADD = {
//     //   [curr.name]: curr.residents.map((beast) => beast.name),
//     // };
//     acc[curr.location] = options.sex ? [...acc[curr.location], {
//       [curr.name]: curr.residents.map((beast) => beast.sex === options.sex),
//     }] : [...acc[curr.location], {
//       [curr.name]: curr.residents.map((beast) => beast.name),
//     }];
//   return acc;
// }, {});
// }

function makeAnimalsArray(option, residents) {
  return residents.reduce((acc, curr) => {
    if (option.sex && option.sex === curr.sex) acc.push(curr.name);
    if (!option.sex) acc.push(curr.name);
    return acc;
  }, []);
}


function getAnimalMap(options = { includeNames: false, sorted: false, sex: false }) {
  // seu código aqui
  // if (!options) return animalsByLocation();
  // if (options.includeNames || options.sorted) return sortedTrue(options);
  const obj = {};
  species.forEach(({ name, location, residents }) => {
    if (options.includeNames) {
      const animalsNameList = makeAnimalsArray(options, residents);
      if (options.sorted) animalsNameList.sort();
      if(!obj[location]) obj[location] = [];
      obj[location].push({ [name]: animalsNameList });
    } else {
      if (!obj[location]) obj[location] = [];
      obj[location].push(name);
    }
  });
  return obj;
}
console.log(getAnimalMap({includeNames: true}))
module.exports = getAnimalMap;
