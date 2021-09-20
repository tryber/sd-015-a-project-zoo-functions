const data = require('../data/zoo_data');

const { species, hours } = data;

function createBase() {
  const dayWeeks = Object.keys(hours);
  const zooHours = Object.values(hours);
  const daysHoursZoo = dayWeeks.reduce((acc, actual, index, array) => {
    if (i !== array.length - 1) {
      acc[actual] = { officeHour: `Open from ${zooHours[i].open}am until ${zooHours[i].close}pm`,
        exhibition: species.filter((specie) =>
          specie.availability.includes(actual)).map((animal) => animal.name) };
      return acc;
    }
    acc[actual] = { officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});
  return daysHoursZoo;
}

function getSchedule(scheduleTarget) {
  const dayWeeks = Object.keys(hours);
  const animalsArray = species.map((animal) => animal.name);
  if (dayWeeks.includes(scheduleTarget)) {
    return { [scheduleTarget]: createBase()[scheduleTarget] };
  }
  if (animalsArray.includes(scheduleTarget)) {
    const findAnimal = species.find((specie) => specie.name === scheduleTarget);
    return findAnimal.availability;
  }
  return createBase();
}

module.exports = getSchedule;
