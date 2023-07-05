import React from 'react';
import './title.css';


export const Title = ({ args }) => {

  return (
   <h1 className={args.appName==='meinestadt'?'title meinestadt':'title'}>{args.title}</h1>
  );
};
