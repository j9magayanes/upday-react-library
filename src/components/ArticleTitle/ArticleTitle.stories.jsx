import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './articleTitle.css';
import { argsHash } from '@storybook/blocks';
import { ArticleTitle } from './ArticleTitle';

export default {
    title: 'Example/ArticleTitle',
    component: ArticleTitle,
  };
  
  const Template = (args) =><ArticleTitle   {...args} />;
  
  export const Huawei = Template.bind({});
  Huawei.args = {
    label: 'Huawei',
    title: 'Huawei'
  };
  
  export const Web = Template.bind({});
  Web.args = {
    title: 'Web',
    label: 'Web',
    size: 'web'
  };
  
 