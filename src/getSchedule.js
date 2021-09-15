const data = require('../data/zoo_data');

const daysExibitions = () => {
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

const daysAnimals = (day) => ({
  [day]: {
    officeHour: daysExibitions()[day].officeHour,
    exhibition: daysExibitions()[day].exhibition,
  },
});

const isAnimal = (param) => data.species.map((animal) => animal.name).includes(param);
const isDay = (param) => Object.keys(data.hours).includes(param);

const animalDays = (animalName) => data.species
  .find((animal) => animal.name === animalName).availability;

function getSchedule(schedule) {
  if (!schedule || (!isAnimal(schedule) && !isDay(schedule))) return daysExibitions();
  return isAnimal(schedule) ? animalDays(schedule) : daysAnimals(schedule);
}

console.log(getSchedule('Wednesday'));
// console.log(data.species.filter((element) => element.availability.includes('Tuesday')).map((element) => element.name));
// console.log(data.hours.Tuesday.open);
module.exports = getSchedule;
