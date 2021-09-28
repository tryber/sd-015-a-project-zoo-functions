const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  const retorno = {};
  if (!scheduleTarget) {
    Object.entries(data.hours).forEach((day) => {
      retorno[day[0]] = `Open from ${day[1].open}am until ${day[1].close - 12}pm`;
      if (day[0] === 'Monday') {
        retorno[day[0]] = 'CLOSED';
      }
    });
    return retorno;
  }
  const hourDay = Object.entries(data.hours).find((day) => day[0] === scheduleTarget);
  retorno[hourDay[0]] = `Open from ${hourDay[1].open}am until ${hourDay[1].close - 12}pm`;
  if (hourDay[0] === 'Monday') {
    retorno[hourDay[0]] = 'CLOSED';
  }
  return retorno;
}

module.exports = getSchedule;
