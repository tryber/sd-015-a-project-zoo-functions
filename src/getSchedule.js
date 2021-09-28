const data = require('../data/zoo_data');

const { hours, species } = require('../data/zoo_data');

const initialObject = {};

const daysOfTheWeek = Object.keys(hours);

const animalsName = species.map((value) => value.name);

const openAndCloseDays = (daysWeek) => {
  if (daysWeek === 'Monday') {
    return 'CLOSED';
  }
  return `Open from ${hours[daysWeek].open}am until ${hours[daysWeek].close}pm`;
};

const animalsavailableOnTheDay = (daysWeek) => {
  if (daysWeek === 'Monday') {
    return 'The zoo will be closed!';
  }
  return species
    .filter((animal) => animal.availability.includes(daysWeek))
    .map((element) => element.name);
};

const paramDay = (someDay) => {
  if (someDay === 'Monday') {
    return ({
      [someDay]: {
        officeHour: openAndCloseDays(someDay),
        exhibition: animalsavailableOnTheDay(someDay),
      },
    });
  }
  return ({
    [someDay]: {
      officeHour: openAndCloseDays(someDay),
      exhibition: animalsavailableOnTheDay(someDay),
    },
  });
};

const paramAnimal = (someAnimal) => species.find((value) => value.name === someAnimal).availability;

const standardObject = () => {
  daysOfTheWeek.forEach((value) => {
    initialObject[value] = {
      officeHour: openAndCloseDays(value),
      exhibition: animalsavailableOnTheDay(value),
    };
  });
  return initialObject;
};

function getSchedule(param) {
  if (param === undefined || (!daysOfTheWeek.includes(param) && !animalsName.includes(param))) {
    return standardObject();
  }
  if (daysOfTheWeek.includes(param)) {
    return paramDay(param);
  }
  return paramAnimal(param);
}
module.exports = getSchedule;
