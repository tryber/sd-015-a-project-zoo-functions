const data = require('../data/zoo_data');

const animals = data.species.map((specie) => specie.name);
const days = Object.keys(data.hours);

function allWeekAllAnimalsSchedule() {
  const animalsAvailableOnDay = {};
  days.forEach((day) => {
    animalsAvailableOnDay[day] = {};
    if (day !== 'Monday') {
      const string = `Open from ${data.hours[day].open}am until ${data.hours[day].close}pm`;
      animalsAvailableOnDay[day].officeHour = string;
      animalsAvailableOnDay[day].exhibition = data.species.filter((specie) =>
        (specie.availability.some((dayAvailable) => dayAvailable === day)
       === true)).map((specie) => specie.name);
    } else {
      animalsAvailableOnDay[day].officeHour = 'CLOSED';
      animalsAvailableOnDay[day].exhibition = 'The zoo will be closed!';
    }
  });
  return animalsAvailableOnDay;
}

function getSchedule(scheduleTarget) {
  if (animals.some((animal) => animal === scheduleTarget)) {
    const selectedAnimal = data.species.find((specie) => specie.name === scheduleTarget);
    const arrayOfDays = selectedAnimal.availability;
    return arrayOfDays;
  }
  if (days.some((day) => day === scheduleTarget)) {
    const objectOfDay = {};
    objectOfDay[scheduleTarget] = allWeekAllAnimalsSchedule()[scheduleTarget];
    return objectOfDay;
  }
  return allWeekAllAnimalsSchedule();
}

module.exports = getSchedule;
