const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const schedule = () => {
  const arraySchedule = Object.entries(hours);
  const object = {};
  arraySchedule.forEach((week) => {
    const { open, close } = week[1];
    Object.assign(object, { [week[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (species
        .filter(({ availability }) => availability.includes(week[0]))
        .map(({ name }) => name)),
    } });
  });

  object.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };

  return object;
};

const returnDays = (scheduleTarget) => ({ [scheduleTarget]: schedule()[scheduleTarget] });

const returnAvailability = (scheduleTarget) => species
  .find(({ name }) => scheduleTarget === name).availability;

function getSchedule(scheduleTarget) {
  // seu código aqui
  const verifyDays = Object.keys(hours).includes(scheduleTarget);
  const verifyAnimal = species.map(({ name }) => name).includes(scheduleTarget);

  if (verifyDays) return returnDays(scheduleTarget);
  if (verifyAnimal) return returnAvailability(scheduleTarget);

  return schedule();
}

module.exports = getSchedule;