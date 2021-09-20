const data = require('../data/zoo_data');

function scheduleType(parameter) {
  let result;
  const sevenDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const boolean = sevenDays.some((day) => day.includes(parameter));
  if (data.species.some((animal) => animal.name === parameter) === true) {
    result = true;
  } else if (boolean === true) {
    result = false;
  }
  return result;
}

function animalScheduele(animalName) {
  const animal = data.species.find((ani) => ani.name === animalName);
  const days = animal.availability;
  return days;
}

function scheduleDay(day) {
  let result1 = {};
  const species = data.species.filter((ani) => ani.availability.includes(day) === true);
  const animalsExhibit = species.map((ani) => ani.name);
  const thisDay = data.hours[`${day}`];
  const open = `Open from ${thisDay.open}am until ${thisDay.close}pm`;
  result1[`${day}`] = {
    officeHour: open,
    exhibition: animalsExhibit,
  };
  if (day === 'Monday') {
    result1 = { Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } };
  }
  return result1;
}

function scheduleDayWithMonday(day) {
  const result1 = {};
  const species = data.species.filter((ani) => ani.availability.includes(day) === true);
  const animalsExhibit = species.map((ani) => ani.name);
  const thisDay = data.hours[`${day}`];
  const open = `Open from ${thisDay.open}am until ${thisDay.close}pm`;
  if (day !== 'Monday') {
    result1[`${day}`] = {
      officeHour: open,
      exhibition: animalsExhibit,
    };
  } else if (day === 'Monday') {
    result1[`${day}`] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  }
  return result1;
}

function fullSchedule() {
  const sevenDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
  const result = {};
  sevenDays.forEach((days) => {
    Object.assign(result, scheduleDayWithMonday(days));
  });

  return result;
}

function getSchedule(scheduleTarget) {
  let result;
  if (scheduleType(scheduleTarget) === true) {
    result = animalScheduele(scheduleTarget);
  } else if (scheduleType(scheduleTarget) === false) {
    result = scheduleDay(scheduleTarget);
  } else if (scheduleType(scheduleTarget) === undefined) {
    result = fullSchedule();
  }
  return result;
}

module.exports = getSchedule;
