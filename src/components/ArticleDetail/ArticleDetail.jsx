import React from 'react';
import './articleDetail.css';


export const ArticleDetail = (   { primary, backgroundColor, size, label, title,  ...props }) => {
  return (
    <p id={props.id}  className={['storybook-title', `storybook-title--${size}`].join(' ')}>{title}</p>
  );
};