/** React core **/
import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';

/** Components **/
import App from './App';

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
