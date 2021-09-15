const data = require('../data/zoo_data');

const { species, hours } = data;

const officeHoursWeekly = (weeklyDay) => ((hours[weeklyDay].open === 0) ? 'CLOSED'
  : `Open from ${hours[weeklyDay].open}am until ${hours[weeklyDay].close}pm`);

const daysExhibition = (weeklyDay) => ((hours[weeklyDay].open === 0)
  ? 'The zoo will be closed!'
  : species.filter((animalAvaiable) => animalAvaiable.availability.includes(weeklyDay))
    . map((names) => names.name));

const weeklySchedule = () => Object.keys(hours).reduce((finalObject, weeklyDay) => {
  const newObject = finalObject;
  newObject[weeklyDay] = {
    officeHour: officeHoursWeekly(weeklyDay),
    exhibition: daysExhibition(weeklyDay),
  };
  return finalObject;
}, {});

const mapWeekly = () => Object.keys(hours).map((mapWeeklyDay) => ({
  [mapWeeklyDay]: {
    officeHour: officeHoursWeekly(mapWeeklyDay),
    exhibition: daysExhibition(mapWeeklyDay),
  },
}));

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

module.exports = getSchedule;
