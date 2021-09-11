const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function checkingIfIsDayOrAnimal(dayAnimal) {
  const ani = species.map((e) => e.name);
  const days = Object.keys(hours);
  if (days.some((e) => e === dayAnimal)) {
    return {
      [dayAnimal]: {
        officeHour: `Open from ${hours[dayAnimal].open}am until ${hours[dayAnimal].close}pm`,
        exhibition: species.filter((e) => e.availability.includes(dayAnimal)).map((e) => e.name),
      },
    };
  }
  if (ani.some((e) => e === dayAnimal)) {
    return species.find((e) => e.name === dayAnimal).availability;
  }
  return false;
}

function ifIsMonday() {
  return {
    Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
  };
}

function showAllSchedule() {
  const days = Object.keys(hours);
  return Object.assign(days.reduce((acc, day) => {
    Object.assign(acc, checkingIfIsDayOrAnimal(day));
    return acc;
  }, {}), ifIsMonday());
}

function getSchedule(scheduleTarget = false) {
  const isDayOrAnimal = checkingIfIsDayOrAnimal(scheduleTarget);
  if (scheduleTarget === 'Monday') {
    return ifIsMonday();
  }
  if (!isDayOrAnimal) {
    return showAllSchedule();
  }
  return isDayOrAnimal;
}

module.exports = getSchedule;
