const countAnimals = require('../src/countAnimals');

describe('5 - Crie uma função que realiza a contagem dos animais de cada espécie', () => {
  it('sem parâmetros, retorna as espécies e sua quantidade', () => {
    const expected = {
      'lions': 4,
      'tigers': 2,
      'bears': 3,
      'penguins': 4,
      'otters': 4,
      'frogs': 2,
      'snakes': 2,
      'elephants': 4,
      'giraffes': 6,
    };
    const actual = countAnimals();

    expect(actual).toStrictEqual(expected);
  });

  it('recebendo como parâmetro um objeto com a chave \'specie\', retorna um número, a quantidade de animais daquela espécie', () => {
    {
      const actual = countAnimals({ specie: 'penguins' });
      const expected = 4;
      expect(actual).toBe(expected);
    }

    {
      const actual = countAnimals({ specie: 'giraffes' });
      const expected = 6;
      expect(actual).toBe(expected);
    }
  });

  it('recebendo como parâmetro um objeto com a chave \'specie\' e \'gender\', retorna um número, a quantidade de animais daquela espécie, no gênero selecionado', () => {
    {
      const actual = countAnimals({ specie: 'bears', gender: 'female' });
      const expected = 0;
      expect(actual).toBe(expected);
    }

    {
      const actual = countAnimals({ specie: 'elephants', gender: 'male' });
      const expected = 2;
      expect(actual).toBe(expected);
    }
  });
});
