const data = require('../data/zoo_data');

function getAnimals(day) {
  return data.species.filter((specie) => specie.availability.some((elem) =>
    elem === day)).map((animal) => animal.name);
}

function getDailySchedule(weekDay, day) {
  return (day !== 'Monday') ? {
    officeHour: `Open from ${weekDay.open}am until ${weekDay.close}pm`,
    exhibition: getAnimals(day),
  } : {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
}

function getScheduleByAnimal(day, schedule, scheduleTarget) {
  if (day !== 'Monday') {
    return schedule[day].exhibition.some((elem) => elem === scheduleTarget);
  }
  return false;
}

function getSchedule(scheduleTarget) {
  const weekDays = Object.keys(data.hours);
  const animals = data.species.map((specie) => specie.name);
  const schedule = {};
  weekDays.forEach((day) => {
    const weekDay = data.hours[day];
    schedule[day] = getDailySchedule(weekDay, day);
  });
  if (weekDays.some((day) => day === scheduleTarget)) {
    return { [scheduleTarget]: schedule[scheduleTarget] };
  }
  if (animals.some((animal) => animal === scheduleTarget)) {
    return weekDays.filter((day) => getScheduleByAnimal(day, schedule, scheduleTarget));
  }
  return schedule;
}

module.exports = getSchedule;
