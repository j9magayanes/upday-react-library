import React from 'react';

import { HuaweiWrapper } from './HuaweiWrapper';


export default {
  title: 'Form/HuaweiWrapper',
  component: HuaweiWrapper,
};

const Template = (args) =><HuaweiWrapper {...args}/>;


export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  args:{   id: 'wrapper',}
};
