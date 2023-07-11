import React from 'react';


import { ReadMore } from './ReadMore';

export default {
  title: 'Form/ReadMore',
  component: ReadMore,
};

const Template = (args) => <ReadMore {...args} />;

export const Web = Template.bind({});
Web.args = {
  label: 'Web',
  args:{  text: 'Read More', id: 'web'}
};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Default',
  args:{  text: 'Read More', id: 'meinestadt'}
};