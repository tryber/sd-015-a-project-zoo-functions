const data = require('../data/zoo_data');

function getAnimals(day) {
  return data.species.filter((specie) => specie.availability.some((elem) => elem === day)).map((animal) => animal.name);
}

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(data.hours);
  const schedule = {};
  weekDays.forEach((day) => {
    const weekDay = data.hours[day];
    schedule[day] = (day !== 'Monday') ? {
      officeHour: `Open from ${weekDay.open}am until ${weekDay.close}pm`,
      exhibition: getAnimals(day),
    } : {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  });
  return schedule;
}

module.exports = getSchedule;

// {
//   'Tuesday': {
//     'officeHour': 'Open from 8am until 6pm',
//     'exhibition': [ 'lions', 'tigers', 'bears', 'penguins', 'elephants', 'giraffes' ],
//   },
//   'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
// }

console.log(getSchedule());
