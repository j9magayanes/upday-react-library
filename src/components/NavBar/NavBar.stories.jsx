import React from 'react';

import { NavBar } from './NavBar';

export default {
  title: 'Page/NavBar',
  component: NavBar,
};

const Template = (args) => <NavBar {...args} />;

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {},
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
