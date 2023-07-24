import React from 'react';
import './articleDetail.css';


export const ArticleDetail = (   { primary, backgroundColor, size, label, title, id, args }) => {
  return (
    <p id={id}  className={['storybook-title', `storybook-title--${size}`].join(' ')}>{title}</p>
  );
};