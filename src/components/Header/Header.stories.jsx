import React from 'react';

import { Header } from './Header';

export default {
  title: 'Example/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Website= Template.bind({});
Website.args = {
  user: {},
};

export const Huawei = Template.bind({});
Huawei.args = {};
