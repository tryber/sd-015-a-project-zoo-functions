const data = require("../data/zoo_data");

const getSpeciesByIds =(...ids) => {
  let retorno = [];
  switch (ids.length) {
    case 0:
      return retorno;
      break;
    case 1:
      retorno.push(data.species.find((idSearch) => idSearch.id === ids[0]));
      return retorno;
      break;
    case 2:
      retorno.push(data.species.find((idSearch) => idSearch.id === ids[0]));
      retorno.push(data.species.find((idSearch) => idSearch.id === ids[1]));
      return retorno;
      break;
  }
}

module.exports = getSpeciesByIds;
