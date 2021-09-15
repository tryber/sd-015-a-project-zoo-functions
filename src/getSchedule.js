const { hours, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const arrayHours = Object.keys(hours);
function getSchedule(scheduleTarget) {
  if (scheduleTarget === undefined || scheduleTarget !== hours || scheduleTarget !== species.name) {
    const days = arrayHours.reduce((acc, curr, i, a) => {
      if (i !== a.length - 1) {
        acc[curr] = {
          officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
          exhibition: species.filter((param) =>
            param.availability.includes(curr)).map((elem) =>
            elem.name),
        };
        return acc;
      }
      acc[curr] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
      return acc;
    }, {});
    return days;
  }
}

function dayMonday(scheduleTarget) {
  if (scheduleTarget === 'Monday') {
    return `{
      'Monday': { 'officeHour': 'CLOSED', 'exhibition': 'The zoo will be closed!' },
    }`;
  }
}

// console.log(dayMonday());

module.exports = getSchedule;
