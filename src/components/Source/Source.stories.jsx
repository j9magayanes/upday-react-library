import React from 'react';

import { Source } from './Source';

export default {
  title: 'Form/Source',
  component: Source,
};

const Template = (args) => <Source {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  args:{   category: 'Default',}


};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinstadt',
  args:{ appName: 'meinestadt',  source: 'Meinestadt',}
};