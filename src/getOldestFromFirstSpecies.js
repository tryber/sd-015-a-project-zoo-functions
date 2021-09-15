const { employees, species } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const filtro = employees.filter((item) => item.id === id);
  const animaisId = filtro.map((item) => item.responsibleFor).pop();
  const tipo = species.filter((item) => item.id === animaisId[0]);
  const animais = tipo.map((item) => item.residents).pop();
  const idades = animais.map((item) => item.age);
  const maisVelho = idades.reduce((acc, curr) => (acc > curr ? acc : curr));
  const res = animais.filter((item) => item.age === maisVelho).pop();
  const res2 = Object.values(res);
  return res2;
}

module.exports = getOldestFromFirstSpecies;
