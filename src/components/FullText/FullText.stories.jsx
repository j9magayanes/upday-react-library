
import React from 'react';

import { FullText } from './FullText';


export default {
  title: 'Form/FullText',
  component: FullText,
};

const Template = (args) =><FullText   {...args} />;

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'meinestadt',
  title: 'meinestadt',
  fulltext: 'Mehr als',

};

export const Web = Template.bind({});
Web.args = {
  title: 'Web',
  size: 'web',
  fulltext: 'Mehr als'
};