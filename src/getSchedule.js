const { hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function othersParameter() {
  const obj = { };
  const withOutMonday = Object.keys(hours).filter((element) => element !== 'Monday');
  withOutMonday.forEach((cur) => {
    obj[cur] = {
      officeHour: `Open from ${hours[cur].open}am until ${hours[cur].close}pm`,
      exhibition: data.species.filter((element) =>
        element.availability.includes(cur)).map((animal) => animal.name),
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
    exhibition: data.species.filter((element) =>
      element.availability.includes(day)).map((animal) => animal.name),
  };
  return objAll;
}

function getAnimal(animal) {
  return data.species.find((element) => element.name === animal).availability;
}

function getSchedule(day) {
  if (Object.keys(hours).some((cur) => cur === day)) {
    return daysWeak(day);
  }
  if (data.species.some((cur) => cur.name === day)) {
    return getAnimal(day);
  }
  return othersParameter();
}

console.log(getSchedule());

module.exports = getSchedule;
