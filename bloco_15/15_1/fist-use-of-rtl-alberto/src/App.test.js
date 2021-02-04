import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Tela de inserção de email', () => {
  it('Verifica que há um campo de input de email na tela', () => {
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

  it('Verifica se há um botão', () => {
    // 1 - Acessar os elementos da Tela
    const { getAllByRole } = render(<App/>);
    const button = getAllByRole('button');
    // Armazena todos os botões encontrados em um array
    // 3 - Fazer seu teste
    expect(button.length).toBe(2);
  });

  it('Verifica se há um botão \'enviar\'', () => {
    const { getByTestId } = render(<App/>);
    const button = getByTestId('id-send');
    expect(button).toBeInTheDocument();
    expect(button).toHaveValue('Enviar')
  });

  it('Verifica que, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    // Aqui precisarei acessar 3 elementos: o campo de input, o botão enviar, e o lugar da tela onde armazenou o valor
    // 1 - Acessar os elementos da Tela
    const EMAIL_USER = 'email@email.com';
    
    const { getByTestId, getByLabelText } = render(<App />);
    const emailInput = getByLabelText('Email:');
    const sendButton = getByTestId('id-send');
    const userEmail = getByTestId('id-email-user');
    // 2 - Interagir com eles se houver necessidade
    fireEvent.change(emailInput, { target: { value: EMAIL_USER } });
    fireEvent.click(sendButton);
    // 3 - Fazer seu teste
    // expect(emailInput).toHaveValue('');
    // expect(userEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe(`Valor: ${EMAIL_USER}`);
  })
});
