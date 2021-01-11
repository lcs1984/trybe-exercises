const service = require('./exemplo_aula3');

describe('writing the to fix example', () => {
    it('test if randonNumber() is called when we call isDivisible()', () => { 
    service.isDivisible = jest.fn().mockReturnValue(true);
    service.randomNumber = jest.fn().mockReturnValue(0.025);
    service.randomNumber();

    expect(service.isDivisible()).toBe(true);
    expect(service.randomNumber).toHaveBeenCalled();
  })
})

//vai