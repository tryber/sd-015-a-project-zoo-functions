// const data = require('../data/zoo_data');
// const { species } = require('../data/zoo_data');

// function name(param) {
//   console.log(species.reduce((objFinal, specie) => {
//     if (objFinal[specie.location]) {console.log('0')
//       console.log(objFinal)};
//     if (!objFinal[specie.location]) {objFinal[specie.location] = { [specie.name]:specie.residents.map((nomesDosAnimais) => nomesDosAnimais.name).sort() };
//     return objFinal;
//   }, {}));
    
  
// }

// function sorted(param) {
//   console.log(species.reduce((objFinal, specie) => {
//     objFinal[specie.location] = { [specie.name]:specie.residents.map((nomesDosAnimais) => nomesDosAnimais.name).sort() };
//     return objFinal;
//   }, {}));
// }

// function sexFemale () {
//   return species.reduce((objFinal, specie) => {
//     objFinal[specie.location] = { [specie.name]: species.map((element) => element.residents.filter((sex) => sex.sex === 'female').map((nome) => nome.name))};
//     return objFinal;
//   }, []);
  
// }


// // // // function sex(param) {
// //   console.log(species.map((element) => element.residents.filter((sex) => sex.sex === 'female').map((nome) => nome.name)))

// function getAnimalMap(...options) {
//   const ne = species.filter((element) => element.location === 'NE').map((element) => element.name);
//   const nw = species.filter((element) => element.location === 'NW').map((element) => element.name);
//   const se = species.filter((element) => element.location === 'SE').map((element) => element.name);
//   const sw = species.filter((element) => element.location === 'SW').map((element) => element.name);
//   if (!options[0]) {
//     return { NE: ne, NW: nw, SE: se, SW: sw };
//   }
//   if (options[0].includeNames === true && options[0].sorted === true) {
//     const obj = { NE: sorted(ne), NW: sorted(nw), SE: sorted(se), SW: sorted(sw) };
//     return obj;
//   }
//   if (options[0].includeNames === true && options[0].sex=== 'male') {
//     return species.map((element) => element.residents.filter((sex) => sex.sex === 'male').map((nome) => nome.name));
//   }
//   if (options[0].includeNames === true && options[0].sex=== 'female') {
//     const obj = sexFemale()
//       return obj;
//     }
    
//   if (options[0].includeNames === true) {
//     const obj = name();
//     return obj;
//   }
// }
// const options = { includeNames: true};
// // sex();
// console.log(getAnimalMap(options));
// module.exports = getAnimalMap;
