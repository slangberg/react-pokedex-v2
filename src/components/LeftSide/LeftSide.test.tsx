import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import App from './App';
import { store } from '../../app/store';

test('it renders app without crashing', () => {
  const { container } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(container).toBeInTheDocument();
});
