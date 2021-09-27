const data = require('../data/zoo_data');

function countEntrants(entrants) {
  let somaad = 0;
  let somach = 0;
  let somasn = 0;
  entrants.forEach((element) => {
    if (element.age < 18) somach += 1;
    if (element.age >= 18 && element.age < 50) {
      somaad += 1;
    } else somasn += 1;
  });

  const contagem = {
    adult: somaad,
    child: somach,
    senior: somasn - somach,
  };
  return (contagem);
}

function calculateEntry(entrants) {
  if ((entrants === undefined) || (Object.values(entrants).length === 0)) {
    return 0;
  }
  const totalVisitantes = countEntrants(entrants);
  const precoAdult = data.prices.adult * totalVisitantes.adult;
  const precoChild = data.prices.child * totalVisitantes.child;
  const precoSenior = data.prices.senior * totalVisitantes.senior;
  return precoAdult + precoChild + precoSenior;
}

module.exports = { calculateEntry, countEntrants };
