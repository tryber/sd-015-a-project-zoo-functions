const data = require('../data/zoo_data');
const { hours } = data;
const { species } = data;

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (!scheduleTarget) {
    return Object.keys(hours).reduce((acc, curr) => {
      acc[curr] = { officeHour: `open from ${hours[curr].open}am until ${hours[curr].close}pm` };
      acc[curr] = { exhibition: species.map((specie) => specie.availability.includes(curr)) };
    }, {});
  }
}

module.exports = getSchedule;
