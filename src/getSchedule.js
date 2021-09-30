const data = require('../data/zoo_data');

const { species, hours } = data;

function everyDays(weekDays) {
  const result = {};
  weekDays.forEach((day) => {
    if (hours[day].open === 0 && hours[day].close === 0) {
      result[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    } else {
      result[day] = {
        officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
        exhibition: species.filter((ani) => ani.availability.includes(day)).map((ani) => ani.name),
      };
    }
  });
  return result;
}

// console.log(everyDays(Object.keys(hours)));

function oneDay(day) {
  const result = {};
  result[day] = {
    officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((ani) => ani.availability.includes(day)).map((ani) => ani.name),
  };
  return result;
}

// console.log(oneDay('Tuesday'));

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(hours);
  const animals = species.map((ani) => ani.name);
  if (![...weekDays, ...animals].includes(scheduleTarget)) {
    return everyDays(weekDays);
  }
  if (scheduleTarget === 'Monday') {
    return {
      Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' },
    };
  }
  if (weekDays.includes(scheduleTarget)) {
    return oneDay(scheduleTarget);
  }
  if (animals.includes(scheduleTarget)) {
    return species.find((ani) => scheduleTarget === ani.name).availability;
  }
}

module.exports = getSchedule;
