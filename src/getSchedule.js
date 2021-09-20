const data = require('../data/zoo_data');

function verifyDay(scheduleTarget) {
  const animalsDay = data.species
    .filter((element) => element.availability.includes(scheduleTarget));
  const nameAnimals = animalsDay.map((element) => element.name);
  const dayHours = data.hours[scheduleTarget];
  const toReturn = {};
  toReturn[scheduleTarget] = {
    officeHour: `Open from ${dayHours.open}am until ${dayHours.close}pm`,
    exhibition: nameAnimals,
  };

  return toReturn;
}

function verifyAnimal(scheduleTarget) {
  const animals = data.species.find((element) => element.name === scheduleTarget);
  return animals.availability;
}

const nameAnimals = data.species.map((element) => element.name);
const namesDay = Object.keys(data.hours);
function dontArguments() {
  const ObjectReturn = {};
  namesDay.forEach((element) => {
    if (element === 'Monday') {
      ObjectReturn[element] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    } else {
      const animalsDay = data.species
        .filter((scopeElement) => scopeElement.availability.includes(element));
      const animalsName = animalsDay.map((elements) => elements.name);
      const arrayHoursDay = data.hours[element];
      ObjectReturn[element] = {
        officeHour: `Open from ${arrayHoursDay.open}am until ${arrayHoursDay.close}pm`,
        exhibition: animalsName,
      };
    }
  });
  return ObjectReturn;
}

const verifyMonday = {};
function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === 'Monday') {
    verifyMonday[scheduleTarget] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return verifyMonday;
  } if (nameAnimals.includes(scheduleTarget)) {
    return verifyAnimal(scheduleTarget);
  } if (namesDay.includes(scheduleTarget)) {
    return verifyDay(scheduleTarget); // referência: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/81/commits/7a28adcd239830563493ed56aa22292cb0493937
  }
  return dontArguments();
}
// referncia: https://github.com/tryber/sd-015-b-project-zoo-functions/pull/22/commits/8fb86397815d0db3798e4718405f1d92df6418db
module.exports = getSchedule;