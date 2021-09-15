// const { hours, species } = require('../data/zoo_data');

// function openZoo() {
//   if (!scheduleTarget) {
//     return Object.keys(hours).reduce((acumulador, currenteValue) => Object.assign(acumulador, {
//       [currenteValue]: {
//         officeHour:
//           `Open from ${hours[currenteValue].open}am until ${hours[currenteValue].close}pm`,
//         exhibition: species.filter((animals) =>
//           animals.availability.includes(currenteValue)).map((nameAnimals) =>
//           nameAnimals.name),
//       },
//     }, moday()), {});
//   }
// };

// const monday = () => ({ monday: {officeHour: 'CLOSED', exhibition: 'The zoo will be closed!'}});

function getSchedule(scheduleTarget) {
  //
}
console.log(getSchedule());
module.exports = getSchedule;
