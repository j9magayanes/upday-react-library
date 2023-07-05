import React from 'react';
import './info.css';

export const Info = ({ ...props}) => {
    return (
        <div className="info">{props.text}</div>
    )
}