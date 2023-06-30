import React from 'react';
import './headline.css';


export const Headline= ({args}) => {
        return (
    
            <div className="padded-lr legal">
                <h1 id="imprint">{args.headline}</h1>
            </div>
    )}
