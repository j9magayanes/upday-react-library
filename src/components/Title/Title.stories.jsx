import React from 'react';

import { Title } from './Title';


export default {
  title: 'Form/Title',
  component: Title,
};

const Template = (args) =><Title {...args}/>;


export const Default = Template.bind({});
Default.args = {
  label: 'Default',
  args:{   title: 'Selenskyj fordert EU-Beitrittsverhandlungen',}
};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinstadt',
  args:{ appName: 'meinestadt', title: 'Selenskyj fordert EU-Beitrittsverhandlungen',}
};