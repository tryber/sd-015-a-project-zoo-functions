const data = require('../data/zoo_data');

const { species } = data;

function countAnimals({specie, gender} = '') {
  if (!specie) {
    return species.reduce(((count, {name, residents: {length}}) => {
      Object.assign(count, { [name]: length});
      return count;
    }), {});
  }

  if (!gender) {
    return species.find((value) => value.name === specie).residents.length;
  }

  return species.find((anl) => anl.name  === specie).residents.filter((elm) => elm.sex === gender).length;
}

module.exports = countAnimals;

// Referências: 
// Sobre Object.assign: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
// fonte para (!x) usado nos if's: https://stackoverflow.com/questions/2559318/how-to-check-for-an-undefined-or-null-variable-in-javascript
// Trecho específico do artigo: 
// Note 2
// This - even shorter - variant is not equivalent:

// if ( !some_variable ) {
// some_variable is either null, undefined, 0, NaN, false, or an empty string
// }
// so

// if ( some_variable ) {
// we don't get here if some_variable is null, undefined, 0, NaN, false, or ""
// }
// fonte sobre atruibuição em situações de desestruturação: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
