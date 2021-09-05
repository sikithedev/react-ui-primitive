import React from 'react';

import { Element } from './Element';

export default {
  title: 'Example/Element',
  component: Element,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Element {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Element',
};
