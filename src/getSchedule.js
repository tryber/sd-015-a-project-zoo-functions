const data = require('../data/zoo_data');

const { hours, species } = data;

function makeObj() {
  const obj = {};
  const entrie = Object.entries(hours);
  entrie.forEach((e) => {
    let newObj = { exhibition: [], officeHour: `Open from ${e[1].open}am until ${e[1].close}pm` };
    species.forEach((i) => {
      if (i.availability.includes(e[0])) newObj.exhibition.push(i.name);
    });
    if (e[1].open === 0 && e[1].close === 0) {
      newObj = { exhibition: 'The zoo will be closed!', officeHour: 'CLOSED' };
    }
    obj[e[0]] = newObj;
  });
  return obj;
}

function makeDayAnswer(obj, day) {
  return { [day]: obj[day] };
}

function animals(obj) {
  const values = Object.values(obj);
  const res = values
    .map((e) => e.exhibition)
    .reduce((a, b) => a.concat(b));
  return res;
}

function makeAnimalAnswer(animal) {
  const findAnimal = species.find((e) => e.name === animal);
  return findAnimal.availability;
}

function getSchedule(scheduleTarget) {
  const obj = makeObj();
  const days = Object.keys(obj);
  const arrAnimals = animals(obj);
  if (!scheduleTarget) return obj;
  if (days.includes(scheduleTarget)) return makeDayAnswer(obj, scheduleTarget);
  if (arrAnimals.includes(scheduleTarget)) return makeAnimalAnswer(scheduleTarget);
  return obj;
}

module.exports = getSchedule;
