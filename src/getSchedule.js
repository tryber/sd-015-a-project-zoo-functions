const { species, hours } = require('../data/zoo_data');
const data = require('../data/zoo_data');

const weekDays = Object.keys(hours);
// console.log(weekDays.some((element) => element === 'Cavalo'));
const arrayAnimals = species.reduce((acc, next) => [...acc, next.name], []);
const animalsDays = species.reduce((acc, { name, availability }) => (
  { ...acc, [name]: availability }
), {});
// console.log(animalsDays.lions);
const daysAnimals = (arrayWeek, arrayAni, toTest) => {
  const dayNAnimals = {};
  arrayWeek.forEach((weekDay) => {
    const animales = [];
    arrayAni.forEach((animal) => {
      if (toTest[animal].some((element) => element === weekDay)) {
        animales.push(animal);
      }
    });
    dayNAnimals[weekDay] = animales;
  });
  return dayNAnimals;
};
// console.log(daysAnimals(weekDays, arrayAnimals, animalsDays));
const fullSchedule = () => {
  const allDays = {};
  weekDays.forEach((day) => { allDays[day] = { officeHour: '', exhibition: '' }; });
  weekDays.forEach((day) => {
    allDays[day].officeHour = `Open from ${hours[day].open}am until ${hours[day].close}pm`;
    allDays[day].exhibition = daysAnimals(weekDays, arrayAnimals, animalsDays)[day];
  });
  allDays.Monday.officeHour = 'CLOSED';
  allDays.Monday.exhibition = 'The zoo will be closed!';
  return allDays;
};
// console.log(fullSchedule());
const animalName = (scheduleTarget) => {
  const allAnimals = [];
  species.forEach((specie) => allAnimals.push({ [specie.name]: specie.availability }));
  return allAnimals.find((element) => Object.keys(element)[0] === scheduleTarget)[scheduleTarget];
};

const weekDay = (scheduleTarget) => {
  const obj = {};
  obj[scheduleTarget] = fullSchedule()[scheduleTarget];
  return obj;
};

function getSchedule(scheduleTarget) {
  if (weekDays.some((element) => element === scheduleTarget)) {
    return weekDay(scheduleTarget);
  }
  const isTrue = arrayAnimals.some((element) => element === scheduleTarget);
  if (isTrue) {
    return animalName(scheduleTarget);
  }
  return fullSchedule();
}
console.log(getSchedule('Monday'));
module.exports = getSchedule;
