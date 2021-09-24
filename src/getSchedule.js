// continuar
// https://github.com/tryber/sd-015-a-project-zoo-functions/compare/renato-zanella-zoo-functions-project
// https://github.com/tryber/sd-015-a-project-zoo-functions/pull/107/files
// https://github.com/tryber/sd-015-a-project-zoo-functions/compare/rafael-scherer-project-zoo-functions
const data = require('../data/zoo_data');

const { hours, species } = data;

function createBase() {
  const dayWeeks = Object.keys(hours);
  const hourPerDay = Object.values(hours);
  const hourTable = dayWeeks.reduce((acc, act, i, array) => {
    if (i !== array.length - 1) {
      acc[act] = { officeHour: `Open from ${hourPerDay[i].open}am until ${hourPerDay[i].close}pm`,
        exhibition: species.filter((spe) =>
          spe.availability.includes(act)).map((animal) => animal.name) };
      return acc;
    }
    acc[act] = { officeHour: 'CLOSED',
      exhibition: 'The zoo will be closed!' };
    return acc;
  }, {});
  return hourTable;
}

function getSchedule(scheduleTarget) {
  const dayWeeks = Object.keys(hours);
  const animalsArray = species.map((ani) => ani.name);
  if (dayWeeks.includes(scheduleTarget)) {
    return { [scheduleTarget]: createBase()[scheduleTarget] };
  }
  if (animalsArray.includes(scheduleTarget)) {
    const findAnimal = species.find((spe) => spe.name === scheduleTarget);
    return findAnimal.availability;
  }
  return createBase();
}

module.exports = getSchedule;
