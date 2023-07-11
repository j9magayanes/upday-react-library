import React from 'react';

import { RelativeTimestamp } from './RelativeTimestamp';

export default {
  title: 'Form/RelativeTimestamp',
  component: RelativeTimestamp,
};

const Template = (args) => <RelativeTimestamp {...args} />;

export const Web = Template.bind({});
Web.args = {
  label: 'Default',
  args:{   detail: '> 1 day', appName: 'default'}
};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  label: 'Meinstadt',
  args:{ detail: '> 2 days', appName: 'meinestadt'}
};

