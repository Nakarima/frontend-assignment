import { render, screen } from '@testing-library/react';

import { Card } from './card';

it('renders without crashing', async () => {
  const title = 'Title';
  const description = 'Description';
  const date = '12.12.2020';
  const image = 'https://placeimg.com/280/180/nature';

  render(<Card title={title} description={description} date={date} image={image} />);

  expect(screen.getByText(title)).toBeInTheDocument();
  expect(screen.getByText(description)).toBeInTheDocument();
  expect(screen.getByText(date)).toBeInTheDocument();
});
