import React from 'react';
import './articleDetail.css';
import  'upday-web-components/components/articleDetail'

export const ArticleDetail = ({ className, previewText }) => {
  return (
    <article-detail class={className} text={previewText}></article-detail>
  );
};