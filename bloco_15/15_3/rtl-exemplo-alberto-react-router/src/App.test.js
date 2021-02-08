import React from 'react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';
import { fireEvent } from '@testing-library/react';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    const home = getByText(/Você está na página Início/);
    expect(home).toBeInTheDocument();
  });

  it('deve renderizar o componente Sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    // Here we have 2 tests: first on pathname and second on textcontent;
    const pathname = history.location.pathname;
    expect(pathname).toBe('/about');
    const aboutAll = getByText(/Você está na página Sobre/i);
    expect(aboutAll).toBeInTheDocument();
  });

  it('deve testar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    // A diferença nesse caso é que utilizamos a função history.push() e passamos como 
    // argumento algum link que não existe dentro de nossa aplicação. Depois disso, 
    // testamos se o texto que aparece no navegador, ao digitar um caminho para uma página
    // que não existe, é encontrado
    history.push('/pagina/que-nao-existe/');
    const noMatch = getByText(/Página não encontrada/i);
    expect(noMatch).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    // Por último, vamos mostrar como testar um componente separadamente
    const { getByText } = renderWithRouter(<About />);
    // Você verá que, ao copiar esse test, o Jest retornará um erro, dizendo que 
    // o componente About não foi definido. Isso é porque ele não foi importado 
    // nesse arquivo! Altere a linha de import do App.
    const aboutOnly = getByText(/Você está na página Sobre/i);
    expect(aboutOnly).toBeInTheDocument();
    // Talvez você esteja se perguntando porque o App não foi importado com {} e o
    //  About foi. Isso aconteceu porque só pode haver um export default 
    //  por arquivo (que faz o componente ser importável sem as chaves {} ) 
    //  e o App tomou esse espaço, então os outros componentes exportados 
    //  ficam em "segundo plano". Por isso, para serem importados corretamente, necessitam do {}
  });
});

// const { history } = renderWithRouter(<App/>);
// console.log(history);