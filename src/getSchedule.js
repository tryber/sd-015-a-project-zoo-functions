const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const noTarget = (dataHours) => {
  const schedule = {};
  Object.entries(dataHours).forEach((day) => {
    schedule[day[0]] = {
      officeHour: day[1].open === 0
        ? 'CLOSED'
        : `Open from ${day[1].open}am until ${day[1].close}pm`,
      exhibition: day[1].open === 0
        ? 'The zoo will be closed!'
        : species
          .filter((specie) => specie.availability
            .includes(day[0]))
          .map((specie) => specie.name),
    };
  });
  return schedule;
};

const targetIsADay = (scheduleTarget) => ({
  [scheduleTarget]: {
    officeHour: hours[scheduleTarget].open === 0
      ? 'CLOSED'
      : `Open from ${hours[scheduleTarget].open}am until ${hours[scheduleTarget].close}pm`,
    exhibition: hours[scheduleTarget].open === 0
      ? 'The zoo will be closed!'
      : species
        .filter((specie) => specie.availability
          .includes(scheduleTarget))
        .map((specie) => specie.name),
  },
});

const targetIsAnAnimal = (scheduleTarget) => species
  .find((specie) => specie.name === scheduleTarget).availability;

const getSchedule = (scheduleTarget) => {
  const dataHours = { ...hours };
  if (Object.keys(dataHours).includes(scheduleTarget)) {
    return targetIsADay(scheduleTarget);
  }
  if (species.some((specie) => specie.name === scheduleTarget)) {
    return targetIsAnAnimal(scheduleTarget);
  }
  return noTarget(dataHours);
};

module.exports = getSchedule;
