const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function checkingIfIsDayOrAnimal(param) {
  const ani = species.map((e) => e.name);
  const days = Object.keys(hours);
  if (days.some((e) => e === param)) {
    return { [param]: {
      officeHour: `Open from ${hours[param].open}am until ${hours[param].close}pm`,
      exhibition: species.filter((e) => e.availability.includes(param)).map((e) => e.name) } };
  }
  if (ani.some((e) => e === param)) return species.find((e) => e.name === param).availability;
  return false;
}

const monday = () => ({ Monday: { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' } });

const showAllSchedule = () => Object.assign(Object.keys(hours).reduce((acc, day) =>
  Object.assign(acc, checkingIfIsDayOrAnimal(day)), {}), monday());

function getSchedule(scheduleTarget = false) {
  if (scheduleTarget === 'Monday') return monday();
  if (!checkingIfIsDayOrAnimal(scheduleTarget)) return showAllSchedule();
  return checkingIfIsDayOrAnimal(scheduleTarget);
}

module.exports = getSchedule;
