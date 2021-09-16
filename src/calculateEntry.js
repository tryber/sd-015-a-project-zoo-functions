const data = require('../data/zoo_data');

const entrantsXX = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

const entrantsList = {
  child: 0,
  adult: 0,
  senior: 0,
};

let totalValue = 0;

function resetEntrants() {
  entrantsList.child = 0;
  entrantsList.adult = 0;
  entrantsList.senior = 0;
}

function insertInEntrantList(element) {
  if (element.age < 18) {
    entrantsList.child += 1;
  } else if (element.age >= 18 && element.age < 50) {
    entrantsList.adult += 1;
  } else {
    entrantsList.senior += 1;
  }
}

function countEntrants(entrants) {
  resetEntrants();
  entrants.forEach((e) => insertInEntrantList(e));
  return entrantsList;
}

function refreshTotalValue() {
  const childCount = entrantsList.child;
  const adultCount = entrantsList.adult;
  const seniorCount = entrantsList.senior;
  const childPrice = 20.99;
  const adultPrice = 49.99;
  const seniorPrice = 24.99;
  totalValue = (childCount * childPrice) + (adultCount * adultPrice) + (seniorCount * seniorPrice);
  return totalValue;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
countEntrants(entrants);
return refreshTotalValue();
}

module.exports = { calculateEntry, countEntrants };
