const data = require('../data/zoo_data');

const isAnimal = (param) => data.species.map((animal) => animal.name).includes(param);

const isDay = (param) => Object.keys(data.hours).includes(param);

const weekExibitions = () => {
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

const animalExibitions = (animalName) => data.species
  .find((animal) => animal.name === animalName).availability;

const dayExibition = (day) => ({
  [day]: {
    officeHour: weekExibitions()[day].officeHour,
    exhibition: weekExibitions()[day].exhibition,
  },
});

function getSchedule(schedule) {
  if (!schedule || (!isAnimal(schedule) && !isDay(schedule))) return weekExibitions();
  return isAnimal(schedule) ? animalExibitions(schedule) : dayExibition(schedule);
}

module.exports = getSchedule;
