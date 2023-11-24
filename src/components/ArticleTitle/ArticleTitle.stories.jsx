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
    id: 'meinestadt',
    title: 'meinestadt',
    className: 'meinestadt'
  };
  
  export const Web = Template.bind({});
  Web.args = {
    title: 'Web',
    id: 'web',
    className: 'web'
  };
  
 