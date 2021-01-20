const {SumNumbers} = require('./exemplo_aula_2')
const {getListAnimals, findAnimalsByType} = require('./exemplo_aula_3')

test('Testando SumNumbers, soma 5 mais 10', done => {
    SumNumbers(5, 10, (result) => {
      expect(result).toBe(15);
      done();
    });
  })

  // Utiliza o return e precisa do expected.assertions e done 

  describe('Quando o tipo do animal existe', () => {
    test('Retorne a lista de animais', () => {
      expect.assertions(2);
      return getListAnimals('Dog').then(listDogs => {
        expect(listDogs[0].name).toEqual('Dorminhoco');
        expect(listDogs[1].name).toEqual('Soneca');
      });
    });
  });

  // No caso de async e await não preciso do return

  test('Testando com async/await', async () => {
    const listDogs = await getListAnimals('Dog');
    expect(listDogs[0].name).toEqual('Dorminhoco');
    expect(listDogs[1].name).toEqual('Soneca');
  });

  test('Testando com async/await, testando o reject', async () => {
    try {
      await getListAnimals('Lion');
    } catch (error) {
      expect(error).toEqual({ error: "Não possui esse tipo de animal." })
    }
  });

  // Utilizando os testes com resolves e rejects com return e depois async await
  describe('Testando promise - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      test('Retorne a lista de animais', () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        return expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      test('Retorna um erro', () => {
        expect.assertions(1);
        return expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
      });
    });
  });

  // Agora com async await

  describe('Testando Async/Await - findAnimalsByType', () => {
    describe('Quando o tipo do animal existe', () => {
      it('Retorne a lista de animais', async () => {
        const listDogs = [
          { name: 'Dorminhoco', age: 1, type: 'Dog' },
          { name: 'Soneca', age: 2, type: 'Dog' },
        ]
        expect.assertions(1);
        await expect(getListAnimals('Dog')).resolves.toEqual(listDogs)
      });
    });
  
    describe('Quando o tipo de animal não existe', () => {
      it('Retorna um erro', async () => {
        expect.assertions(1);
        await expect(getListAnimals('Lion')).rejects.toEqual({ error: 'Não possui esse tipo de animal.' })
      });
    });
  });