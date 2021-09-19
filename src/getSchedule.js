const { time } = require('faker');
const { hours, species } = require('../data/zoo_data');

// const obj = {};
// function allInfo() {
//   Object.keys(hours).forEach((elementHour) => {
//     const time = hours[elementHour];
//     if (elementHour !== 'Monday') {
//       obj[elementHour] = {
//         officeHour: `Open from ${time.open}am until ${time.close}pm`,
//         exhibition: species.filter((animal) => animal.availability.includes(elementHour))
//           .map((element) => element.name),
//       };
//     } else {
//       obj[elementHour] = { officeHour: 'CLOSED',
//         exhibition: 'The zoo will be closed!',
//       };
//     }
//     return obj;
//   });

//   function getSchedule(scheduleTarget) {
//     const animal = (getHourAnimal) => species.find((animals) => animals.name === scheduleTarget);
//   } 
//   return allInfo();


// return {
//   [Object.keys(hours)[0]]: {
//     officeHour: `Open from ${hours.Tuesday.open}am until ${hours.Tuesday.close}pm`,
//     exhibition: species.filter((tuesday) => tuesday.availability.includes('Tuesday'))
//       .map((element) => element.name),
//   },
// };
module.exports = getSchedule;
