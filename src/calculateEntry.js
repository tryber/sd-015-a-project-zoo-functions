const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const kindOfPerson = {
    child: 0,
    adult: 0,
    senior: 0,
  };
  function objKindOfPeople(person) {
    if (person.age < 18) {
      kindOfPerson.child += 1;
    } else if (person.age >= 50) {
      kindOfPerson.senior += 1;
    } else {
      kindOfPerson.adult += 1;
    }
    return kindOfPerson;
  }
  entrants.forEach(objKindOfPeople);
  return kindOfPerson;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  const kindOfPeople = countEntrants(entrants);
  const priceOfTicket = data.prices;
  let sumPrice = 0;
  Object.keys(priceOfTicket).forEach((price) => {
    sumPrice += priceOfTicket[price] * kindOfPeople[price];
  });
  return sumPrice;
}

module.exports = { calculateEntry, countEntrants };
