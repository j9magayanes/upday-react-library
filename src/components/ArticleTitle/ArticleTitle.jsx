import React, { Children } from 'react';
import PropTypes from 'prop-types';
import './articleTitle.css';
import { argsHash } from '@storybook/blocks'

export const ArticleTitle = (
    { primary, backgroundColor, size, label, title,  ...props }
) => {
  return (
   <h1 id={props.id} className={['storybook-title', `storybook-title--${size}`].join(' ')}>{title}</h1>
  );
};