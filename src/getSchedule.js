const data = require('../data/zoo_data');

const { ...schedule } = data.hours;
const [...species] = data.species;

function getSchedule(scheduleTarget) {
  const scheduleDays = Object.keys(schedule);
  const result = scheduleDays.map((day) => {
    const speciesByDay = species
      .filter((specie) => specie.availability.includes(day))
      .map((specieByDay) => specieByDay.name);
    if (day !== 'Monday') {
      return {
        [day]: `Open from ${schedule[day].open}am to ${schedule[day].close}pm`,
        exhibition: speciesByDay,
      };
    }
    return { [day]: ' CLOSED', exhibition: 'The zoo will be closed!' };
  });
  return result;
}

getSchedule();

module.exports = getSchedule;
