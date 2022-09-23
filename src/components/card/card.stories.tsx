import { ComponentStory } from '@storybook/react';

import { Card } from './card';

export default {
  title: 'Card',
  component: Card,
};

const Template: ComponentStory<typeof Card> = (args) => {
  return <Card {...args} />;
};

export const Example = Template.bind({});
Example.args = {
  title: 'Title',
  // Really long text
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  date: '12.12.2020',
  image: 'https://placeimg.com/280/180/nature',
};
