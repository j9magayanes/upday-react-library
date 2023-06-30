import React from 'react';

import { Text } from './Text';


export default {
  title: 'Form/Text',
  component: Text,
};

const Template = () =><Text props={{div: "category", h1:"category", text: "Category"}}  />;


export const Default = Template.bind({});