const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayHours = Object.keys(hours);

function semParametro() {
  const days = arrayHours.reduce((acc, curr, i, a) => {
    if (i !== a.length - 1) {
      acc[curr] = {
        officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
        exhibition: species.filter((param) =>
          param.availability.includes(curr)).map((elem) =>
          elem.name),
      };
      return acc;
    }
    acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});
  return days;
}

function dayMonday() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function findDay(scheduleTarget) {
  const findSomeDay = arrayHours.filter((element) => element === scheduleTarget);
  const days = findSomeDay.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((param) =>
        param.availability.includes(curr)).map((elem) =>
        elem.name),
    };
    return acc;
  }, {});
  return days;
}

function findAnimal(scheduleTarget) {
  const animal = species.find((element) => element.name === scheduleTarget).availability;
  return animal;
}
// console.log(findAnimal('lions'));

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return dayMonday();
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return findDay(scheduleTarget);
  }
  if (species.some((element) => element.name === scheduleTarget)) {
    return findAnimal(scheduleTarget);
  }
  return semParametro();
}

console.log(getSchedule('lions'));
// console.log(Object.keys(hours));

module.exports = getSchedule;
