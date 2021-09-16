const { hours, species } = require('../data/zoo_data');

function othersParameter() {
  const obj = { };
  const withOutMonday = Object.keys(hours).filter((monday) => monday !== 'Monday');
  withOutMonday.forEach((days) => {
    obj[days] = {
      officeHour: `Open from ${hours[days].open}am until ${hours[days].close}pm`,
      exhibition: species.filter((element) =>
        element.availability.includes(days)).map((animal) => animal.name),
    };
  });
  obj.Monday = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
  return obj;
}

function daysWeak(day) {
  if (day === 'Monday') {
    const mondayObj = { };
    mondayObj[day] = { officeHour: 'CLOSED', exhibition: 'The zoo will be closed!' };
    return mondayObj;
  }
  const objAll = { };
  objAll[day] = { officeHour: `Open from ${hours[day].open}am until ${hours[day].close}pm`,
    exhibition: species.filter((specie) =>
      specie.availability.includes(day)).map((animal) => animal.name),
  };
  return objAll;
}

function getAnimal(animal) {
  return species.find((element) => element.name === animal).availability;
}

function getSchedule(day) {
  if (Object.keys(hours).some((cur) => cur === day)) {
    return daysWeak(day);
  }
  if (species.some((cur) => cur.name === day)) {
    return getAnimal(day);
  }
  return othersParameter();
}

console.log(getSchedule());

module.exports = getSchedule;
