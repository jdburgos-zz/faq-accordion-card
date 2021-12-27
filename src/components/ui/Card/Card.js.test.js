/** React core **/
import ReactDOM from 'react-dom';
import { render, screen } from '@testing-library/react';

/** Components **/
import Card from './Card';

describe('Card component' , () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card />, div);
  });

  test("renders 'card test' title", () => {
    render(<Card><h3>card test</h3></Card>);
    const titleElement = screen.getByText(/card test/i);

    expect(titleElement).toBeInTheDocument();
  });
})
