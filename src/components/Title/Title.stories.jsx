import React from 'react';

import { Title } from './Title';


export default {
  title: 'Form/Title',
  component: Title,
};

const Template = () =><Title args={{title: "Title"}}  />;


export const Default = Template.bind({});