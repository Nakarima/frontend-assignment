import { render, screen } from '@testing-library/react';

import { SelectInput } from './select-input';

it('renders without crashing', async () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];

  const value = options[0];
  const onChange = () => {
    return;
  };

  render(<SelectInput
    options={options}
    value={value}
    onChange={onChange}
  />);

  expect(screen.getByRole('combobox')).toHaveDisplayValue(options[0]);
  expect(await screen.findByRole('option', { name: options[1]})).toBeInTheDocument();

});
