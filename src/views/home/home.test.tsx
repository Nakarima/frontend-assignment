import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';

import { Home } from './home';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useLocation: () => ({
    pathname: 'localhost:3000'
  })
}));

it('renders without crashing', async () => {

  render(<BrowserRouter><Home /></BrowserRouter>);

  expect(screen.getAllByRole('combobox')).toHaveLength(2);
});
