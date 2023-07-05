import React from 'react';
import './categoryDetail.css';


export const CategoryDetail = ({ args }) => {

  return (
   <h1 className={args.appName==='meinestadt'?'categoryDetail meinestadt':'categoryDetail'}>{args.category}</h1>
  );
};