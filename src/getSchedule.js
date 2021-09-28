const data = require('../data/zoo_data');
const { hours } = require('../data/zoo_data');


function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    const clone = hours;
    const x = Object.keys(clone);
    const obj = {};
    x.forEach((element) => {
      obj[element]=(`Open from ${hours.Thursday.open} until ${hours.Thursday.close}`); 
      console.log(obj);
    });
  }
}
console.log(getSchedule());

module.exports = getSchedule;
