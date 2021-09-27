const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const qteAdult = entrants.filter((element) => element.age < 18);
  const qteChild = entrants.filter((child) => (child.age >= 18) && (child.age < 50));
  const qteSenior = entrants.filter((senior) => (senior.age >= 50));
  const contagem = {
    adult: qteAdult.reduce((somaAdult) => somaAdult + qteAdult.age),
    child: qteChild.reduce((somaChild) => somaChild + qteAdult.age),
    senior: qteSenior.reduce((somaSenior) => somaSenior + qteAdult.age),
  };
  return (contagem);
}

function calculateEntry(entrants) {
  if ((entrants === undefined) || (Object.values(entrants).length === 0)) {
    return 0;
  }
  const totalVisitantes = countEntrants();
  const precoAdult = data.species.prices * totalVisitantes.contagem.adult;
  const precoChild = data.species.prices * totalVisitantes.contagem.child;
  const precoSenior = data.species.prices * totalVisitantes.contagem.senior;
  return precoAdult + precoChild + precoSenior;
}

/* const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];
countEntrants(entrants);
calculateEntry(entrants); */

module.exports = { calculateEntry, countEntrants };
