
import React from 'react';

import { FullText } from './FullText';


export default {
  title: 'Form/FullText',
  component: FullText,
};

const Template = () =><FullText args={{items: [{name: "test", callback:"", href:""}]}}/>;


export const Default = Template.bind({
});