const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getScheduleByWeekDate(weekDate) {
  const schedule = hours[weekDate];
  const officeHour = (schedule.open === 0 && schedule.close === 0)
    ? 'CLOSED' : `Open from ${schedule.open}am until ${schedule.close}pm`;
  const exhibition = species
    .filter((specie) => specie.availability.some((day) => day === weekDate))
    .map((specie) => specie.name);

  return { officeHour, exhibition: (exhibition.length) ? exhibition : 'The zoo will be closed!' };
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  const days = Object.keys(hours);
  const animals = species.map((specie) => specie.name);

  if (days.some((day) => day === scheduleTarget)) {
    const result = {};
    result[scheduleTarget] = getScheduleByWeekDate(scheduleTarget);
    return result;
  } if (animals.some((animal) => animal === scheduleTarget)) {
    return species.find((specie) => (specie.name === scheduleTarget)).availability;
  }
  const result = {};
  Object.keys(hours).forEach((weekDate) => {
    result[weekDate] = getScheduleByWeekDate(weekDate);
  });
  return result;
}

console.log(getSchedule('Monday'));
module.exports = getSchedule;
