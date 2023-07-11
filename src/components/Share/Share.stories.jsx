import React from 'react';

import { Share } from './Share';

export default {
  title: 'Form/Share',
  component: Share,
};

const Template = (args) => <Share {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  args:{   detail: '> 1 day', id: 'default'}
};