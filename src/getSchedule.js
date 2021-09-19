const data = require('../data/zoo_data');

function getDay(day) {
  const objDay = {};

  if (data.hours[day].open === 0) {
    objDay.officeHour = 'CLOSED';
    objDay.exhibition = 'The zoo will be closed!';

    return objDay;
  }

  const hours = data.hours[day];
  const animals = data.species.filter((obj) => obj.availability.includes(day));

  objDay.officeHour = `Open from ${hours.open}am until ${hours.close}pm`;
  objDay.exhibition = animals.map((obj) => obj.name);

  return objDay;
}

function getDayWithName(animal) {
  const dataAnimal = data.species.filter((specie) => specie.name === animal);

  return dataAnimal.map((obj) => obj.availability)[0];
}

function getObjWithDay(day) {
  const resultado = {};
  resultado[day] = getDay(day);
  return resultado;
}

function getObjWithArray() {
  const days = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];

  const resultado = {};

  days.map((obj) => {
    resultado[obj] = getDay(obj);
    return resultado;
  });
  return resultado;
}

function getSchedule(scheduleTarget) {
  // seu código aqui
  if (data.species.some((obj) => obj.name === scheduleTarget)) {
    return getDayWithName(scheduleTarget);
  } if (scheduleTarget === undefined) {
    return getObjWithArray();
  } if (Object.keys(data.hours).some((obj) => obj.includes(scheduleTarget))) {
    return getObjWithDay(scheduleTarget);
  }
  return getObjWithArray();
}

console.log(getSchedule('Monday'));

module.exports = getSchedule;
