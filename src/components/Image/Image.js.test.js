/** React core **/
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

/** Components **/
import Image from './Image';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Image />, div);
});
