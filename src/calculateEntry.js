const data = require('../data/zoo_data');

function countEntrants(entrants) {
  const retorno = {};
  const children = entrants.filter((a) => a.age < 18);
  retorno.child = children.length;
  const adults = entrants.filter((b) => b.age >= 18 && b.age < 50);
  retorno.adult = adults.length;
  const seniors = entrants.filter((c) => c.age >= 50);
  retorno.senior = seniors.length;
  return retorno;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) return 0;
  // usar o metodo object.keys foi uma ideia que busquei no repositório de Leonardo.
  // https://github.com/tryber/sd-015-a-project-zoo-functions/pull/1/commits/fc49fc544616d097f8ca8aafeb2876ca597afdc8
  let entry = 0;
  const people = countEntrants(entrants);
  entry += people.child * data.prices.child;
  entry += people.adult * data.prices.adult;
  entry += people.senior * data.prices.senior;
  return entry;
}

module.exports = { calculateEntry, countEntrants };
