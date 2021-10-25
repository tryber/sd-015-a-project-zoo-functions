const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;
const closed = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
const animalNames = species.map((specie) => specie.name);
const weekDays = Object.keys(hours);

function getDaySchedule(...weekDay) {
  const conversion = (weekDay.every((day) => weekDays.includes(day))) ? weekDay : weekDays;
  return (conversion.length > 0 ? conversion : weekDays).reduce((acc, day) => {
    const schedule = hours[day];
    acc[day] = Object.values(schedule).every((h) => h < 1) ? closed
      : {
        officeHour: `Open from ${schedule.open}am until ${schedule.close}pm`,
        exhibition: species.filter((spe) =>
          spe.availability.includes(day)).map((animal) => animal.name),
      };
    return acc;
  }, {});
}

function getSchedule(...scheduleTarget) {
  const target = scheduleTarget.length === 1 ? scheduleTarget[0] : false;
  if (animalNames.includes(target)) {
    return species.find((specie) => specie.name === target).availability;
  }
  if (weekDays.includes(target)) return getDaySchedule(target);
  return getDaySchedule(...scheduleTarget);
}

module.exports = getSchedule;
