const { species } = require('../data/zoo_data');

const countAnimals = (animal) => {
  // seu código aqui
  if (!animal) {
    return species.reduce((objeto, elemento) =>
      Object.assign(objeto, { [elemento.name]: elemento.residents.length }), {});
  }
  // a dica do reduce para retornar o objeto formatado foi do colega caio Lima turma 15 - A.
  // o object é um metodo que faz com que o primeiro parametro seja o local que será armazenado o objeto, o outro
  // o segundo parametro é o valor que o objeto vai receber no caso ele vai dar um loop e vai botar a chave que é a string
  // do animal e o valor é a quantidade deles, no ultimo parametro vai ter um objeto vazio que acrescentar no inicio
  const { specie, sex } = animal; // desconstrução do objeto
  if (!sex) { // se não tiver sex ele retorna a quantidade de animais selecionados
    return species.find((zooAnimal) => zooAnimal.name === specie).residents.length;
  }
  return species.find((zooAnimal) => zooAnimal.name === specie).residents
  // se tiver os dois ele retorna a quantidade de animais daquele sexo e para isso ele faz uma filtragem
    .filter((genreAnimal) => genreAnimal.sex === sex).length;
};

module.exports = countAnimals;
