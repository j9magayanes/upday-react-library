import React from 'react';
import './adwrapper.css';

export const AdWrapper = ({ children }) => {
    return (
      <div className="ad-block grow">
        {children}
      </div>
    )
}