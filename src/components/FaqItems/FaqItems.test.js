/** React core **/
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

/** Components **/
import FaqItems from './FaqItems';

describe('FaqItems component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FaqItems />, div);
  });

  test("renders 'FAQ' title", () => {
    render(<FaqItems />);
    const titleElement = screen.getByText(/FAQ/i);

    expect(titleElement).toBeInTheDocument();
  });
})
