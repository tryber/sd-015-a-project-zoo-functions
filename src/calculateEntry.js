const { prices } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function countEntrants(entrants) {
  return entrants.reduce((acumulador, agesClass) => {
    const arrAge = agesClass.age;
    const objResult = acumulador;
    if (arrAge < 18) {
      objResult.child += 1;
    }
    if (arrAge >= 18 && arrAge < 50) {
      objResult.adult += 1;
    }
    if (arrAge >= 50) {
      objResult.senior += 1;
    }
    return objResult;
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const peoples = countEntrants(entrants);
  const { adult, senior, child } = prices;
  const adultPrice = peoples.adult * adult;
  const seniorPrice = peoples.senior * senior;
  const childPrice = peoples.child * child;
  const result = adultPrice + seniorPrice + childPrice;
  return result;
}
// console.log(calculateEntry(''));
module.exports = { calculateEntry, countEntrants };
