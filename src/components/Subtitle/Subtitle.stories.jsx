import React from 'react';

import { Subtitle } from './Subtitle';


export default {
  title: 'Form/Subitle',
  component: Subtitle,
};

const Template = () =><Subtitle args={{subtitle: "Subitle"}}  />;


export const Default = Template.bind({});