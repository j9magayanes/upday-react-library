import React from 'react';

import { ArticleDetail } from './ArticleDetail';
// import { AdWrapper } from '../AdWrapper/AdWrapper'


export default {
  title: 'Form/ArticleDetail',
  component: ArticleDetail,
};

const Template = () =><ArticleDetail args={{items: [{name: "test", callback:"", href:""}]}}/>;


export const Default = Template.bind({});