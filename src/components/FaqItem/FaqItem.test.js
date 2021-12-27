/** React core **/
import { render, screen } from '@testing-library/react';
import ReactDOM from 'react-dom';

/** Components **/
import FaqItem from './FaqItem';

const mockItem = {
  title: "How many team members can I invite?",
  content: "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan."
};

describe('FaqItems component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FaqItem item={ mockItem } />, div);
  });

  test("renders 'How many team members can I invite?' title", () => {
    render(<FaqItem item={ mockItem } />);
    const titleElement = screen.getByText(/How many team members can I invite?/i);

    expect(titleElement).toBeInTheDocument();
  });
})
