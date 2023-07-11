import React from 'react';
import './relativeTimestamp.css';


export const RelativeTimestamp = ({args}) => {
        return (
                <span className="timestamp" id={args.appName}>{args.detail}</span>
           )}