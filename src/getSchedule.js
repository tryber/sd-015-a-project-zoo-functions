const data = require('../data/zoo_data');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const allDays = data.hours;
    Object.keys(allDays).map((day) => console.log(day));
  }
}

module.exports = getSchedule;
getSchedule();
