import React from 'react';
import './adblock.css';

export const AdBlock = ({ children }) => {
    return (
      <div className="ad-block grow">
        {children}
      </div>
    )
}