import { useState } from 'react';
import { ComponentStory } from '@storybook/react';

import { SelectInput } from './select-input';

export default {
  title: 'SelectInput',
  component: SelectInput,
};

const Template: ComponentStory<typeof SelectInput> = (args) => {
  const [value, setValue] = useState(args.options[0]);

  return <SelectInput
    {...args}
    value={value}
    onChange={setValue}
  />;
};

export const Example = Template.bind({});
Example.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
};
