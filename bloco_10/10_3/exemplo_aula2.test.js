const service = require('./exemplo_aula2');

test("#randomRgbColor primeiro teste", () => {
  // testando se a função foi chamada
  service.randomRgbColor = jest.fn().mockReturnValue("rgb(255,255,255)");
  
  service.randomRgbColor();
  expect(service.randomRgbColor).toHaveBeenCalled();
expect(service.randomRgbColor()).toBe("rgb(255,255,255)");
});


test("#randomRgbColor segundo teste", () => {
  // testando quantas vezes a função foi chamada e qual seu retorno
  service.randomRgbColor = jest
    .fn()
    .mockReturnValue('default value')
    .mockReturnValueOnce('first call')
    .mockReturnValueOnce('second call')
    .mockReturnValueOnce('third call');

  expect(service.randomRgbColor).toHaveBeenCalledTimes(0);

  expect(service.randomRgbColor()).toBe("first call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(1);

  expect(service.randomRgbColor()).toBe("second call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(2);

  expect(service.randomRgbColor()).toBe("third call");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(3);

  expect(service.randomRgbColor()).toBe("default value");
  expect(service.randomRgbColor).toHaveBeenCalledTimes(4);
});