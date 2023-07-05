import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  decorators: [(Story) => (<div style={{ margin: '3em' }}>
  {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
  <Story />
</div>) ],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) =><Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  onclick: {action: 'clicked'}
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};

export const LongPrimary = Template.bind({});
LongPrimary.args = {
  ...Primary.args,
  children: 'Long Primary'
};

export const Log = Template.bind({});
Log.args = {
  ...Log.args,
  onClick: () => console.log('Test Error')
};