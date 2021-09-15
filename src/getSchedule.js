const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const objeto = {};
    const dias = Object.keys(data.hours);
    dias.forEach((dia) => {
      [objeto[dia]] = {
        officeHour: `Open from ${data.hours.dia.open}am until ${data.hours.Tuesday.close}pm`,
        exhibition: [],
      };
    });
    return objeto;
  }
}

console.log(getSchedule());

module.exports = getSchedule;
