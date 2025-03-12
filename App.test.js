import { render, screen } from '@testing-library/react'; // Importa funções de teste da biblioteca Testing Library
import App from './App';  // Importa o componente principal da aplicação

test('renders learn react link', () => { // Teste para verificar se o link "learn react" está sendo renderizado na tela
  render(<App />);  // Renderiza o componente App
  const linkElement = screen.getByText(/learn react/i); // Procura um elemento que contenha o texto "learn react" (case insensitive)
  expect(linkElement).toBeInTheDocument(); // Verifica se o elemento foi encontrado na página
});

