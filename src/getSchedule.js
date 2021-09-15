const data = require('../data/zoo_data');

const animalsDays = () => {
  const obj = {};
  Object.keys(data.hours).forEach((day) => {
    if (day !== 'Monday') {
      const time = data.hours[day];
      obj[day] = {
        officeHour: `Open from ${time.open}am until ${time.close}pm`,
        exhibition: data.species
          .filter((animal) => animal.availability.includes(day))
          .map((animal) => animal.name),
      };
    } else {
      obj[day] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return obj;
};
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) return animalsDays();
}

console.log(getSchedule());
// console.log(data.species.filter((element) => element.availability.includes('Tuesday')).map((element) => element.name));
// console.log(data.hours.Tuesday.open);
module.exports = getSchedule;
