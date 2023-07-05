import React from 'react';
import './articleDetail.css';

/* interface propType {
  footerItemName: String,
  footerItemCallback: Function
} */

export const Footer = ({ args }) => {
  return (
    <footer className='padded-lr'>
      <ul>
      { args.items.map((item, i) =>
      <>
          <li>
           { item.callback ? <a onClick={item.callback}>  {item.name}
            </a> : <a href={item.href}>  {item.name}
            </a>
            }
          </li>
  
          </>
      )
      }
      </ul>
      <p>Copyright 2023, upday GmbH & Co. KG</p>
    </footer>
  );
};
