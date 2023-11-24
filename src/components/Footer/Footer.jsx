import React from 'react';
import './footer.css';
import 'upday-web-components/components/listComponent';
/* interface propType {
  footerItemName: String,
  footerItemCallback: Function
} */

export const Footer = ({ args }) => {
  return (
    <div className='padded-lr'>
     
      <list-component items={args.items} />
    </div>
  );
};
