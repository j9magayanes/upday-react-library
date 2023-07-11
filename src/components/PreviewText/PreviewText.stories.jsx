import React from 'react';

import { PreviewText } from './PreviewText';

export default {
  title: 'Form/PreviewText',
  component: PreviewText,
};

const Template = (args) => <PreviewText {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  args:{  preview: 'wrapper',}
};