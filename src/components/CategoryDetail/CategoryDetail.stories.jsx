import React from 'react';

import { CategoryDetail } from './CategoryDetail';


export default {
  title: 'Form/CategoryDetail',
  component: CategoryDetail,
};

const Template = (args) =><CategoryDetail {...args}/>;


export const Default = Template.bind({});
Default.args = {
  label: 'Default',
 
 category: 'Default',
 args:{ appName: 'meinestadt',  category: 'Default',}

};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinstadt',
  category: 'Top News',
  args:{ appName: 'meinestadt',  category: 'Default',}
};