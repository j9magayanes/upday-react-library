import React from 'react';

import { Source } from './Source';

export default {
  title: 'Form/Source',
  component: Source,
};

const Template = (args) => <Source {...args} />;

export const Web = Template.bind({});
Web.args = {
  label: 'Web',
  args:{ appName: 'web',  source: 'Web',}


};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinstadt',
  args:{ appName: 'meinestadt',  source: 'Meinestadt',}
};