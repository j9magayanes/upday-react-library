import React from 'react';

import { Detail } from './Detail';


export default {
  title: 'Form/Detail',
  component: Detail,
};

const Template = () =><Detail args={{detail: "Detail"}}  />;


export const Default = Template.bind({});