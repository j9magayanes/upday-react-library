import React from 'react';
import './adwrapper.css';

export const AdWrapper = ({ children }) => {
    return (
      <div className="ad-wrapper grow">
        {children}
      </div>
    )
}