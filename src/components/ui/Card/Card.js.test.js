/** React core **/
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

/** Components **/
import Card from './Card';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card />, div);
});
