const { species } = require('../data/zoo_data');
const data = require('../data/zoo_data');
// Função que encontra o animal com base em seu ID, e retorna o objeto dentro de um array:
function getSpeciesByIds(...ids) {
  // Se nenhum valor for passado como parametro:
  const result = [];
  if (!ids) {
    return result;
  }
  // Se um ou mais valores forem passados como parametros:
  const findAnimal = () => ids.forEach((id) => {
    const newAnimal = species.filter((specie) => specie.id === id);
    result.push(...newAnimal);
  });
  findAnimal();
  return result;
}

module.exports = getSpeciesByIds;
