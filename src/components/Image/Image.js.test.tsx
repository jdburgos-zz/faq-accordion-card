/** React core **/
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

/** Components **/
import Image from './Image';

describe('Image component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Image />, div);
  });

  describe('renders images', () => {
    beforeEach(() => render(<Image />));

    test("contains 'box' alt text", () => {
      const womanImg = screen.getByAltText(/box/i);

      expect(womanImg).toBeInTheDocument();
    });

    test("contains 'woman online' alt text", () => {
      const womanImg = screen.getByAltText(/woman online/i);

      expect(womanImg).toBeInTheDocument();
    });

    test("contains 'shadow' alt text", () => {
      const womanImg = screen.getByAltText(/shadow/i);

      expect(womanImg).toBeInTheDocument();
    });
  });
});
