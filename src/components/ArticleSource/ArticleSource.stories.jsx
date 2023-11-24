import { ArgTypes } from '@storybook/blocks'
import React from 'react';
import { ArticleSource } from './ArticleSource';
import { ArticleDetail } from '../ArticleDetail/ArticleDetail';

export default {
  title: 'Form/ArticleSource',
  component: ArticleSource,
};

const Template = (args) => <ArticleSource {...args}  />;

export const Web = Template.bind({});
Web.args = {
    text: "Welt",
    className: "headliner-publisher",
    title: "test"

};

export const Meinestadt = Template.bind({});
Meinestadt.args = {
  text: "Welt",
  className: "headliner-publisher"

};