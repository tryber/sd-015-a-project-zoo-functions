const data = require('../data/zoo_data');

const { species, hours } = data;

const getAnimalsByDay = (day) =>
  species
    .filter((specie) =>
      specie.availability.some((available) => available === day))
    .map((specie) => specie.name);

const listSchedule = () => {
  const keys = Object.keys(hours);
  const resultArray = keys.map((key) => {
    const newObj = { officeHour: null, exhibition: null };
    if (key === 'Monday') {
      newObj.officeHour = 'CLOSED';
      newObj.exhibition = 'The zoo will be closed!';
    } else {
      newObj.officeHour = `Open from ${hours[key].open}am until ${hours[key].close}pm`;
      newObj.exhibition = getAnimalsByDay(key);
    }
    return newObj;
  });
  const objResult = {};
  keys.forEach((elem, index) => {
    objResult[elem] = resultArray[index];
  });
  return objResult;
};

const listByName = (animalName) =>
  species.find((specie) => specie.name === animalName).availability;

const listByDay = (day) => {
  const schedule = listSchedule();
  const newObj = {};
  newObj[day] = schedule[day];
  return newObj;
};

const listByDayOrAnimal = (param) => {
  const days = Object.keys(hours);
  const isValidName = species.some((specie) => specie.name === param);
  const isValidDay = days.some((day) => day === param);
  if (isValidName) return listByName(param);
  if (isValidDay) return listByDay(param);
  return listSchedule();
};

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (scheduleTarget === undefined) return listSchedule();
  return listByDayOrAnimal(scheduleTarget);
}

console.log(listByDay('Wednesday'));

module.exports = getSchedule;
