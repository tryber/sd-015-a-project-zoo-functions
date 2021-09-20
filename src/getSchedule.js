const data = require('../data/zoo_data');

const { species, hours } = data;
const daysOfWeek = Object.keys(hours);

function getSpeciesList() {
  const speciesList = [];
  species.forEach((specie) => {
    speciesList.push(specie.name);
  });
  return speciesList;
}

function getHour(whichDay) {
  const hourOfDay = hours[whichDay];
  return hourOfDay;
}

function completeSchedule() {
  const fullSchedule = daysOfWeek.map((day) =>
    ({ [day]: { officeHour: `Open from ${getHour(day).open}am until ${getHour(day).close}pm` } }));
  // const result = fullSchedule.reduce((a, v) => ({ a, [v]: v }), {});
  return fullSchedule[0];
  // console.log(fullSchedule);
}

function getSchedule(scheduleTarget) {
  console.log(completeSchedule());
}

module.exports = getSchedule;
