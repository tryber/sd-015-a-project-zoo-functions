const data = require('../data/zoo_data');
const { hours, species } = require('../data/zoo_data');

const weeklyCalendar = () => {
  const total = {};
  const array = Object.entries(hours);
  array.forEach((element) => {
    const { open, close } = element[1];
    Object.assign(total, { [element[0]]: {
      officeHour: `Open from ${open}am until ${close}pm`,
      exhibition: (species.filter(({ availability }) =>
        availability.includes(element[0])).map(({ name }) => name)),
    } });
  });
  total.Monday = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return total;
};

const days = (schedule) =>
  ({ [schedule]: weeklyCalendar()[schedule] });

const availabilitys = (schedule) =>
  species.find(({ name }) => schedule === name).availability;

function getSchedule(scheduleTarget) {
  const verifyDays = Object.keys(hours).includes(scheduleTarget);
  const verifyAnimals = species.map(({ name }) => name).includes(scheduleTarget);

  if (verifyDays) {
    return days(scheduleTarget);
  } if (verifyAnimals) {
    return availabilitys(scheduleTarget);
  } return weeklyCalendar();
}

module.exports = getSchedule;
