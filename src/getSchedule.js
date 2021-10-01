// const data = require('../data/zoo_data');
// const { hours } = require('../data/zoo_data');
// const { species } = require('../data/zoo_data');

// const diasEHoras = (Object.entries(hours));

// function dia(scheduleTarget) {
//   const hora = diasEHoras.find((element) => element[0] === scheduleTarget);
//     const obj = { [scheduleTarget]: { officeHour: `Open from ${hora[1].open}am until ${hora[1].close}pm`, exhibition: species
//       .reduce((animaisEmExibiçao, diaDeExibiçao) => {
//         diaDeExibiçao.availability
//           .map((diaDaSemana) => diaDaSemana === scheduleTarget ? animaisEmExibiçao
//             .push(diaDeExibiçao.name) : null);
//         return animaisEmExibiçao;
//       }, []),
//     },
//     };
//     return obj;
// }

// function animal(scheduleTarget) {
//   return species.filter((diasDaSemana) => diasDaSemana.name
//       .includes(scheduleTarget))[0].availability;
// }

// function semParam( sechduleTarget ) {
//   return diasEHoras.reduce((dia, hora) => {
//     dia[hora[0]] = { officeHour: `Open from ${hora[1].open}am until ${hora[1].close}pm`, exhibition: species
//       .reduce((animaisEmExibiçao, diaDeExibiçao) => {
//         diaDeExibiçao.availability
//           .map((diaDaSemana) => diaDaSemana === hora[0] ? animaisEmExibiçao
//             .push(diaDeExibiçao.name) : null);
//         return animaisEmExibiçao;
//       }, []),
//     };
//     if (hora[0] === 'Monday') {
//       dia[hora[0]] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
//     }
//     return dia;
//   }, {});
// }

// function getSchedule(scheduleTarget) {
//   if (scheduleTarget === 'Monday') {
//     console.log('a');
//     return semParam(scheduleTarget);
//     // return { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
//   }
//   if (!(diasEHoras.some((dia) => dia[0] === scheduleTarget) || species
//     .some((element) => element.name === scheduleTarget))) {
//       console.log('b');
//     return semParam(scheduleTarget);
//   }
//   if (species.find((element) => element.availability.includes(scheduleTarget))) {
//     console.log('c');
//     return dia (scheduleTarget);
//   }
//   if (species.map((animal) => animal.name).includes(scheduleTarget)) {
//     console.log('d');
//     return animal(scheduleTarget)
//   }
// }

// console.log(getSchedule('Monday'));

// module.exports = getSchedule;
