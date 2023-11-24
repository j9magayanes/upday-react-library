import React from 'react';
import './articleTitle.css';
import 'upday-web-components/components/articleTitle';

export const ArticleTitle = (
    {title, className, id }
) => {
  return (
   <article-title  className={className}>{title}</article-title>
  );
};