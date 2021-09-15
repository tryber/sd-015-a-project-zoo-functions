const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');
const getSpeciesByIds = require('./getSpeciesByIds');

function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const objList = {};
    const dias = Object.keys(data.hours);
    dias.forEach((dia) => {
      objList[dia] = {
        officeHour: `Open from ${hours.Thursday.open} am until ${hours.Tuesday.close}pm`,
      };  
    });
    return objList;
  }

}
  console.log(getSchedule());
module.exports = getSchedule;
