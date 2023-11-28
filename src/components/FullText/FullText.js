import React from 'react';
import './fullText.css';


export const FullText = ({ title, fulltext }) => {
  return (
    <h2 id="fulltext" title={title}>{fulltext}</h2>
  );
};