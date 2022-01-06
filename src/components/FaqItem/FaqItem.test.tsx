/** React core **/
import { queryByAttribute, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ReactDOM from 'react-dom';

/** Components **/
import FaqItem from './FaqItem';

const mockItem = {
  id: 1,
  title: 'How many team members can I invite?',
  content:
    'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
};

const getById = queryByAttribute.bind(null, 'id');

describe('FaqItems component', () => {
  test('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FaqItem item={mockItem} />, div);
  });

  test("renders 'How many team members can I invite?' title", () => {
    render(<FaqItem item={mockItem} />);
    const titleElement = screen.getByText(/How many team members can I invite?/i);

    expect(titleElement).toBeInTheDocument();
  });

  test("doesn't render content text if the item wasn't clicked", () => {
    render(<FaqItem item={mockItem} />);
    const contentElement = screen.queryByText(
      /You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan./i,
    );

    expect(contentElement).toBeNull();
  });

  test('renders content text if the item was clicked', () => {
    const dom = render(<FaqItem item={mockItem} />);

    const element = getById(dom.container, '1');
    userEvent.click(element);

    const contentElement = screen.getByText(
      /You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan./i,
    );
    expect(contentElement).toBeInTheDocument();
  });
});
