import React from 'react';
import './huaweiwrapper.css';

export const HuaweiWrapper = ({ children, args}) => {
    return (
      <div className="wrapper" id={args.id}>
        {children}
      </div>
    )
}