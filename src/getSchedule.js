const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arr = Object.keys(hours);

function mondayDay() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function animalName(scheduleTarget) {
  const animal = species.find((elem) => elem.name === scheduleTarget).availability;
  return animal;
}

function dayOfWeek(scheduleTarget) {
  const dayFind = arr.filter((d) => d === scheduleTarget);
  const day = dayFind.reduce((acc, curr) => {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: species.filter((param) =>
        param.availability.includes(curr)).map((elem) =>
        elem.name),
    };
    return acc;
  }, {});
  return day;
}

function schedule() {
  const days = arr.reduce((acc, curr, i, a) => {
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

function getSchedule(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return mondayDay();
  }
  if (species.some((nome) => nome.name === scheduleTarget)) {
    return animalName(scheduleTarget);
  }
  if (Object.keys(hours).includes(scheduleTarget)) {
    return dayOfWeek(scheduleTarget);
  }
  return schedule();
}

module.exports = getSchedule;
