import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './articleTitle.css';
import { argsHash } from '@storybook/blocks';
import { ArticleTitle } from './ArticleTitle';

export default {
    title: 'Form/ArticleTitle',
    component: ArticleTitle,
  };
  
  const Template = (args) =><ArticleTitle   {...args} />;
  
  export const Meinestadt = Template.bind({});
  Meinestadt.args = {
    label: 'meinestadt',
    title: 'meinestadt'
  };
  
  export const Web = Template.bind({});
  Web.args = {
    title: 'Web',
    size: 'web'
  };
  
 