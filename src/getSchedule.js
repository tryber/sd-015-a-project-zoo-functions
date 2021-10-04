const data = require('../data/zoo_data');

const { species, hours } = data;

const day = Object.keys(hours);

const date = (days) => species.filter((animal) => animal.availability
  .some((avblty) => avblty === days)).map((specie) => specie.name);

const animal = (spc) => species.find((name) => name.name === spc).availability;

function dateCreator() {
  const gen = day.map((key) => {
    const newObj = {};
    if (key === 'Monday') {
      newObj.officeHour = 'CLOSED';
      newObj.exhibition = 'The zoo will be closed!';
    } else {
      newObj.officeHour = `Open from ${hours[key].open}am until ${hours[key].close}pm`;
      newObj.exhibition = date(key);
    }
    return newObj;
  });
  const objeto = {};
  day.forEach((e, i) => {
    objeto[e] = gen[i];
  });
  return objeto;
}

function getDate(days) {
  const gen = dateCreator();
  const newObj = {};
  newObj[days] = gen[days];
  return newObj;
}

function getCorrectData(dayName) {
  const nome = species.some((spc) => spc.name === dayName);
  const verDia = day.some((days) => days === dayName);
  if (nome) return animal(dayName);
  if (verDia) return getDate(dayName);
  return dateCreator();
}

function getSchedule(dayName) {
  // seu código aqui
  if (dayName === undefined) return dateCreator();
  return getCorrectData(dayName);
}

module.exports = getSchedule;
