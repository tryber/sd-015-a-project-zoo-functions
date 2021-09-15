const data = require('../data/zoo_data');

const verificaEntrants = (entrants) => {
  let retorno = true;
  if (entrants === undefined || Object.values(entrants).length === 0) {
    retorno = true;
  } else { retorno = false; }
  return retorno;
};

const countEntrants = (entrants) => {
  let retorno = {};

  if (verificaEntrants(entrants)) {
    retorno = undefined;
  } else {
    const child = entrants.filter((search) => search.age < 18);
    const adult = entrants.filter((search) => search.age >= 18 && search.age < 50);
    const senior = entrants.filter((search) => search.age >= 50);
    retorno.child = child.length;
    retorno.adult = adult.length;
    retorno.senior = senior.length;
  }
  return retorno;
};

const calculateEntry = (entrants) => {
  let retorno = 0;
  const entrantsAge = countEntrants(entrants);
  if (entrantsAge === undefined) {
    retorno = 0;
  } else {
    const entradaAdulto = data.prices.adult * entrantsAge.adult;
    const entradaCrianca = data.prices.child * entrantsAge.child;
    const entradaIdoso = data.prices.senior * entrantsAge.senior;
    retorno = entradaAdulto + entradaCrianca + entradaIdoso;
  }
  return retorno;
}

module.exports = { calculateEntry, countEntrants };
