const data = require('../data/zoo_data');

function getScheduleByDay(dayOfWeek) {
  if (dayOfWeek === 'Monday') {
    return {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
  }
  return {
    officeHour: `Open from ${data.hours[dayOfWeek].open}am until ${data.hours[dayOfWeek].close}pm`,
    exhibition: (data.species
      .filter((specie) => specie.availability.includes(dayOfWeek)))
      .map((animal) => animal.name),
  };
}

function getScheduleByAnimal(animal) {
  const choosenAnimal = (data.species.find((specie) => specie.name === animal));
  return choosenAnimal.availability;
}

function getSchedule(scheduleTarget) {
  const dayOfWeek = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  if (dayOfWeek.some((day) => day === scheduleTarget)) {
    return {
      [scheduleTarget]: getScheduleByDay(scheduleTarget),
    };
  } if (data.species.some((specie) => specie.name === scheduleTarget)) {
    return getScheduleByAnimal(scheduleTarget);
  }
  return {
    Tuesday: getScheduleByDay('Tuesday'),
    Wednesday: getScheduleByDay('Wednesday'),
    Thursday: getScheduleByDay('Thursday'),
    Friday: getScheduleByDay('Friday'),
    Saturday: getScheduleByDay('Saturday'),
    Sunday: getScheduleByDay('Sunday'),
    Monday: getScheduleByDay('Monday'),
  };
}

module.exports = getSchedule;
