const data = require('../data/zoo_data');

const { hours } = data;
const { species } = data;
const daysWeek = Object.entries(hours);
const testeMap = daysWeek.map((day) => species
  .filter((specie) => specie.availability.find((spc) => spc === day[0])));
const animalExhibitionbByDay = testeMap.map((test) => test.map((tst) => tst.name));

function getAnimalSchedule() {
  const animalSchedule = daysWeek.map(((element, index) => element[0], (element, index) => {
    const obj = {};
    if (element[0] === 'Monday') {
      obj.officeHour = 'CLOSED';
      obj.exhibition = 'The zoo will be closed!';
      return [element[0], obj];
    }
    obj.officeHour = `Open from ${element[1].open}am until ${element[1].close}pm`;
    obj.exhibition = animalExhibitionbByDay[index];
    return [element[0], obj];
  }));
  return animalSchedule;
}

const intoObjAnimalSchedule = getAnimalSchedule().reduce((acc, animal) => {
  const a = animal[0];
  const b = animal[1];
  acc[a] = b;
  return acc;
}, {});
const speciesName = species.map((specie) => specie.name);

function getSchedule(scheduleTarget) {
  const animalScheduleByDay = getAnimalSchedule().filter((day) => day[0] === scheduleTarget);
  if (Object.keys(hours).includes(scheduleTarget)) {
    const intoObjAnimalSchedule2 = animalScheduleByDay.reduce((acc, animal) => {
      const r = animal[0];
      const f = animal[1];
      acc[r] = f;
      return acc;
    }, {});
    return intoObjAnimalSchedule2;
  }
  const speciesFilter = species.filter((spc) => spc.name === scheduleTarget);

  if (speciesName.includes(scheduleTarget)) {
    return speciesFilter[0].availability;
  }
  return intoObjAnimalSchedule;
}

module.exports = getSchedule;
