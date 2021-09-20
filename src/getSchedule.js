const data = require('../data/zoo_data');

const hrPath = data.hours;
const aniPath = data.species;
const days = Object.keys(hrPath);

const noParam = () => {
  const allDaysSche = {};
  days.forEach((weekday) => {
    if (weekday !== 'Monday') {
      allDaysSche[weekday] = {
        officeHour: `Open from ${hrPath[weekday].open}am until ${hrPath[weekday].close}pm`,
        exhibition: aniPath.filter((avAnim) => avAnim.availability.includes(weekday))
          .map((animName) => animName.name),
      };
    } else {
      allDaysSche[weekday] = {
        officeHour: 'CLOSED',
        exhibition: 'The zoo will be closed!',
      };
    }
  });
  return allDaysSche;
};
// Consultei o repositório de alguns alunos para resolver a função noParam(), mas me baseei principalmente no do Pedro Guarize.
// link: https://github.com/tryber/sd-015-a-project-zoo-functions/pull/3/files

const dayParam = (day) => {
  const weekdaysArr = Object.entries(noParam());
  const weekdaysVal = Object.values(noParam());
  for (let i = 0; i < weekdaysArr.length; i += 1) {
    if (weekdaysArr[i][0] === day) {
      return { [day]: weekdaysVal[i] };
    }
  }
};

const animParam = (animal) => {
  const findAnimal = aniPath.find((aniObj) => aniObj.name === animal)
    .availability.filter((avDays) => avDays);
  return findAnimal;
};

function getSchedule(scheduleTarget) {
  if (days.some((day) => day === scheduleTarget)) {
    return dayParam(scheduleTarget);
  } if (aniPath.some((animal) => animal.name === scheduleTarget)) {
    return animParam(scheduleTarget);
  } return noParam();
}

console.log(getSchedule('lions'));

module.exports = getSchedule;
