const data = require('../data/zoo_data');

// const { hours } = data;
// const { species } = require('../data/zoo_data');
// const daysWeek = Object.entries(hours);
// const testeMap = daysWeek.map((day) => species.filter((specie) => specie.availability.find((spc) => spc === day[0])));
// const animalExhibitionbByDay = testeMap.map((test) => test.map((tst) => tst.name));

//  FUNÇÃO COMEÇA AQUI

// const animalSchedule2 = daysWeek.map(((element, index) => element[0], (element, index) => {
//   const obj = {};
//   if (element[0] === 'Monday') {
//     obj['officeHour'] = 'CLOSED';
//     obj['exhibition'] = 'The zoo will be closed!';
//     return [element[0], obj];
//   }
//   obj['officeHour'] = `Open from ${element[1].open}am until ${element[1].close}pm`;
//   obj['exhibition'] = animalExhibitionbByDay[index];
//   return [element[0], obj];
// }))

//   const animalScheduleByDay = animalSchedule2.filter((day) => day[0] === scheduleTarget);
//   console.log(animalScheduleByDay);
//   console.log(Object.keys(hours).includes(scheduleTarget));
//   if (Object.keys(hours).includes(scheduleTarget)) {
//     const intoObjAnimalSchedule = animalScheduleByDay.reduce((acc, animal) => {
//       acc[animal[0]] = animal[1];
//       return acc;
//     }, {});
//     return intoObjAnimalSchedule;
//   }
//     const intoObjAnimalSchedule = animalSchedule2.reduce((acc, animal) => {
//       acc[animal[0]] = animal[1];
//       return acc;
//     }, {});
//     return intoObjAnimalSchedule;

function getSchedule(scheduleTarget) {

}

module.exports = getSchedule;
