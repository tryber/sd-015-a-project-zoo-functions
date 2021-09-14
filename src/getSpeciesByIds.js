const data = require('../data/zoo_data');

const getSpeciesByIds = (...ids) => {
  const retorno = [];
  switch (ids.length) {
  case 0:
    return retorno;
  case 1:
    retorno.push(data.species.find((idSearch) => idSearch.id === ids[0]));
    return retorno;
  case 2:
    retorno.push(data.species.find((idSearch) => idSearch.id === ids[0]));
    retorno.push(data.species.find((idSearch) => idSearch.id === ids[1]));
    return retorno;
  default: return retorno;
  }
};

module.exports = getSpeciesByIds;
