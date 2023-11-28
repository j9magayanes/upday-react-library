import React from 'react';

import { Header } from './Header';

export default {
  title: 'Form/Header',
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Website= Template.bind({});
Website.args = {
  href: "https://www.upday.com/de",
  name: "john",
};

export const Huawei = Template.bind({});
Huawei.args = {
  href: "https://www.upday.com/de",
  name: "john",
};
