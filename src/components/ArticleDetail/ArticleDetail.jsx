import React from 'react';
import './articleDetail.css';
import  'upday-web-components/components/articleDetail'

export const ArticleDetail = (   { primary, backgroundColor, size, label, title, id, args }) => {
  return (
    <article-detail id={id}  className={['storybook-title', `storybook-title--${size}`].join(' ')}>{title}</article-detail>
  );
};