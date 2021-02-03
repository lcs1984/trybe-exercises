import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Verifica que há um campo de input de email na tela', () => {
  // 1 - Acessar os elementos da Tela
  // 2 - Interagir com eles se houver necessidade
  // 3 - Fazer seu teste
  // Isso retorna um seletor
  // ex:
  // const inputEmail = getByLabelText('Email:'); 
  // vai na minha aplicação e vai na label que contém o texto email
  const { getByLabelText } = render(<App />);
  // Essa função de cima me retorna os seletores que utilizarei a minha aplicação
  const inputEmail = getByLabelText('Email:');
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail.type).toBe('email');
});

test('Verifica se há botões', () => {
  // 1 - Acessar os elementos da Tela
  const { getAllByRole } = render(<App/>);
  const button = getAllByRole('button');
  expect(button.length).toBe(2);
});

test('Verifica se há enviar', () => {
  const { getByTestId } = render(<App/>);
  const button = getByTestId('id-send');
  expect(button).toBeInTheDocument();
  expect(button).toHaveValue('Enviar')

});