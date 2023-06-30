import React from 'react';

import { Headline } from './Headline';


export default {
  title: 'Form/Headline',
  component: Headline,
};

const Template = () =><Headline args={{headline: "Headline"}}  />;


export const Default = Template.bind({});