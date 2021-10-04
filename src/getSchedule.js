const data = require('../data/zoo_data');

const { hours, species } = require('../data/zoo_data');

function openingHour() {
  const weekDays = Object.keys(hours);
  const hour = Object.values(hours);
  const dailySchedule = weekDays.reduce((acc, act, i, array) => {
    if (i !== array.length - 1) {
      acc[act] = {
        officeHour: `Open from ${hour[i].open}am until ${hour[i].close}pm`,
        exhibition: species.filter((specie) =>
          specie.availability.includes(act)).map((animal) => animal.name) };
      return acc;
    }
    acc[act] = {
      officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!',
    };
    return acc;
  }, {});
  return dailySchedule;
}

function getSchedule(scheduleTarget) {
  const weekDay = Object.keys(hours);
  const allAnimals = species.map((animal) => animal.name);
  if (weekDay.includes(scheduleTarget)) {
    return { [scheduleTarget]: openingHour()[scheduleTarget] };
  }
  if (allAnimals.includes(scheduleTarget)) {
    const findAnimal = species.find((specie) => specie.name === scheduleTarget);
    return findAnimal.availability;
  }
  return openingHour();
}

module.exports = getSchedule;
