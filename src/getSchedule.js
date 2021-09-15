const data = require('../data/zoo_data');

const { species, hours } = data;

const officeHoursWeekly = (weeklyDay) => ((hours[weeklyDay].open === 0) ? 'CLOSED'
  : `Open from ${hours[weeklyDay].open}am until ${hours[weeklyDay].close}pm`);

const daysExhibition = (weeklyDay) => ((hours[weeklyDay].open === 0)
  ? 'The zoo will be closed!'
  : species.filter((animalAvaiable) => animalAvaiable.availability.includes(weeklyDay))
    . map((names) => names.name));

function weeklySchedule() {
  return Object.keys(hours).reduce((finalObject, weeklyDay) => {
    const newObject = finalObject;
    newObject[weeklyDay] = {
      officeHour: officeHoursWeekly(weeklyDay),
      exhibition: daysExhibition(weeklyDay),
    };
    return finalObject;
  }, {});
}

function mapWeekly() {
  return Object.keys(hours).map((mapWeeklyDay) => ({
    [mapWeeklyDay]: {
      officeHour: officeHoursWeekly(mapWeeklyDay),
      exhibition: daysExhibition(mapWeeklyDay),
    },
  }));
}
// console.log(mapWeekly());
// console.log(daysExhibition('Tuesday'));
function getSchedule(scheduleTarget) {
  if (!scheduleTarget) {
    return weeklySchedule();
  }
  if (Object.keys(weeklySchedule()).includes(scheduleTarget)) {
    return mapWeekly().find((element) => element[scheduleTarget]);
  }
  if (species.find((element) => element.name === scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }
  return weeklySchedule();
}

console.log(getSchedule('lions'));
// console.log(getSchedule());
module.exports = getSchedule;
