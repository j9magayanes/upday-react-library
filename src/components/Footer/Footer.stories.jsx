import React from 'react';

import { Footer } from './Footer';


export default {
  title: 'Form/Footer',
  component: Footer,
};

const Template = () =><Footer args={{items: [{name: "test", callback:"", href:""}]}}/>;


export const Default = Template.bind({
});