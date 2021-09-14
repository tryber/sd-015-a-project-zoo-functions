const data = require('../data/zoo_data');

const { species, hours } = data;

function createListOfAnimals(day) {
  return species.reduce((acc, { name, availability }) => {
    if (availability.includes(day)) {
      const newAcc = [...acc, name];
      return newAcc;
    }
    return acc;
  }, []);
}

function allInformation({ accumulator, day, officeHour }) {
  if (day === 'Monday') {
    accumulator[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return accumulator;
  }
  accumulator[day] = {
    officeHour: `Open from ${officeHour.open}am until ${officeHour.close}pm`,
    exhibition: createListOfAnimals(day),
  };
  return accumulator;
}

function dayInformation({ target, accumulator = {}, day, officeHour }) {
  if (target === 'Monday' && day === target) {
    accumulator[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return accumulator;
  }
  if (day === target) {
    accumulator[day] = {
      officeHour: `Open from ${officeHour.open}am until ${officeHour.close}pm`,
      exhibition: createListOfAnimals(day),
    };
    return accumulator;
  }
  return accumulator;
}

function animalInformation(target, accumulator = []) {
  return [...accumulator, ...species.reduce((list, { name, availability }) => {
    if (name === target) {
      return availability;
    }
    return list;
  }, [])];
}

function isDay(target) {
  const daysOfTheWeek = [
    'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday', 'Monday',
  ];
  return daysOfTheWeek.includes(target);
}

function isAnimal(target) {
  return species.some(({ name }) => name === target);
}
function getSchedule(target) {
  const hoursList = Object.entries(hours);
  return hoursList.reduce((accumulator, [day, officeHour], index) => {
    if (isDay(target)) {
      const localAcc = dayInformation({ target, accumulator, day, officeHour });
      return localAcc;
    }
    if (isAnimal(target)) {
      if (index === 0) {
        const localAcc = animalInformation(target);
        return localAcc;
      }
      return animalInformation(target);
    }
    return allInformation({ accumulator, day, officeHour });
  }, {});
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
