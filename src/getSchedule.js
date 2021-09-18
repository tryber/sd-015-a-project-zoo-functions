const data = require('../data/zoo_data');

const { species, hours } = data;

function fullSchedule(weekDays) {
  const schedule = {};
  weekDays.forEach((day) => {
    if (hours[day].open === 0 && hours[day].close === 0) {
      schedule[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      schedule[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.filter((spc) => spc.availability.includes(day)).map((elm) => elm.name),
      };
    }
  });
  return schedule;
}

function daySchedule(day) {
  const schedule = {};
  schedule[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((spc) => spc.availability.includes(day)).map((elm) => elm.name),
  };
  return schedule;
}

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);
  const animals = species.map((elm) => elm.name);
  if (![...weekDays, ...animals].includes(scheduleTarget)) {
    return fullSchedule(weekDays);
  }
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (weekDays.includes(scheduleTarget)) {
    return daySchedule(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return species.find((spc) => scheduleTarget === spc.name).availability;
  }
}

module.exports = getSchedule;
