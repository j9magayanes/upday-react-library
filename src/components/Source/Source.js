import React from 'react';
import './source.css';


export const Source = ({ args }) => {

  return (
   <h1 className={args.appName==='meinestadt'?'categoryDetail meinestadt':'categoryDetail'}>{args.source}</h1>
  );
};