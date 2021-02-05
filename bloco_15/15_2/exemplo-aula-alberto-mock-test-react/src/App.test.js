import React from 'react';
import { render, screen , waitFor, waitForDomChange} from '@testing-library/react';
import App from './App';

afterEach(() => jest.clearAllMocks());

test('Verifica quando recebe uma piada, mostro na tela', async () => {
   const joke = {
     id: '7k52p',
     joke: 'Chucknorris is awsome',
     status: 200,
   };
  
   //  Faríamos assim, mas estamos trabalhando com uma simulação
  //  const response1 = { json: Promise.resolve(joke)}

  //  A sintaxe fica assim, mas vamos simplificando
  //  const response2 = { json: jest.fn().mockImplementation(() => Promise.resolve(joke))};
  //  const response3 = { json: jest.fn(() => Promise.resolve(joke))};
   const response3 = { json: jest.fn().mockResolvedValue(joke)};

   global.fetch = jest.fn().mockResolvedValue(response3);
   const { findByText } = render(<App/>)
   await findByText('Chucknorris is awsome');

   await waitFor(() => findByText('Chucknorris is awsome'));
});

test('fetch joke', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  jest.spyOn(global, "fetch")
  global.fetch.mockResolvedValue({
    json: jest.fn().mockResolvedValue(joke),
  });
  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith(
    'https://icanhazdadjoke.com/',
    {"headers": {"Accept": "application/json"}}
  );
});

it('should fetch users', async () => {
  const joke = {
    id: '7h3oGtrOfxc',
    joke: 'Whiteboards ... are remarkable.',
    status: 200,
  };

  global.fetch = jest.fn(()=>
  Promise.resolve({
    json: ()=> Promise.resolve(joke)
  }));

  const { findByText } = render(<App />);
  await findByText('Whiteboards ... are remarkable.');
  expect(global.fetch).toBeCalledTimes(1);
  expect(global.fetch).toBeCalledWith('https://icanhazdadjoke.com/', {"headers": {"Accept": "application/json"}});
});